import { NextRequest, NextResponse } from "next/server";

// Proxies Google Places API (New) Autocomplete so the API key never reaches the
// browser. Returns a slim list of suggestions for the BusinessAutocomplete UI.
//
// Docs: https://developers.google.com/maps/documentation/places/web-service/place-autocomplete

const AUTOCOMPLETE_URL =
  "https://places.googleapis.com/v1/places:autocomplete";

interface PlacePrediction {
  placeId: string;
  structuredFormat?: {
    mainText?: { text?: string };
    secondaryText?: { text?: string };
  };
  text?: { text?: string };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY is not set");
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }

  let input = "";
  let sessionToken = "";
  try {
    const body = await req.json();
    input = String(body.input || "").trim();
    sessionToken = String(body.sessionToken || "");
  } catch {
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }

  // Cost guard: don't call Google for tiny / oversized queries.
  if (input.length < 3 || input.length > 200) {
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }

  try {
    const res = await fetch(AUTOCOMPLETE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
      },
      body: JSON.stringify({
        input,
        includedRegionCodes: ["gb"],
        ...(sessionToken ? { sessionToken } : {}),
      }),
    });

    if (!res.ok) {
      console.error("Places autocomplete error:", res.status, await res.text());
      return NextResponse.json({ suggestions: [] }, { status: 200 });
    }

    const data = await res.json();
    const suggestions = (data.suggestions || [])
      .map((s: { placePrediction?: PlacePrediction }) => s.placePrediction)
      .filter((p: PlacePrediction | undefined): p is PlacePrediction => !!p?.placeId)
      .map((p: PlacePrediction) => ({
        placeId: p.placeId,
        mainText: p.structuredFormat?.mainText?.text || p.text?.text || "",
        secondaryText: p.structuredFormat?.secondaryText?.text || "",
      }));

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Places autocomplete fetch failed:", error);
    return NextResponse.json({ suggestions: [] }, { status: 200 });
  }
}
