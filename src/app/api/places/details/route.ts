import { NextRequest, NextResponse } from "next/server";

// Proxies Google Places API (New) Place Details. Field mask is limited to
// displayName, websiteUri and googleMapsUri to keep billing in the cheaper tier
// and only return what the form needs. The same sessionToken used for
// autocomplete is passed here so Google bills the whole lookup as one session.
//
// Docs: https://developers.google.com/maps/documentation/places/web-service/place-details

const FIELD_MASK = "displayName,websiteUri,googleMapsUri";

// Google often appends UTM / click-tracking params to a business's websiteUri.
// Strip them so we store and email a clean URL.
const TRACKING_PARAMS = [
  "gclid",
  "fbclid",
  "gad_source",
  "mc_cid",
  "mc_eid",
  "_ga",
];

function stripTracking(url: string): string {
  if (!url) return "";
  try {
    const u = new URL(url);
    const remove: string[] = [];
    u.searchParams.forEach((_, key) => {
      if (/^utm_/i.test(key) || TRACKING_PARAMS.includes(key.toLowerCase())) {
        remove.push(key);
      }
    });
    remove.forEach((k) => u.searchParams.delete(k));
    return u.toString();
  } catch {
    return url;
  }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY is not set");
    return NextResponse.json({ error: "Unavailable" }, { status: 200 });
  }

  let placeId = "";
  let sessionToken = "";
  try {
    const body = await req.json();
    placeId = String(body.placeId || "").trim();
    sessionToken = String(body.sessionToken || "");
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  if (!placeId) {
    return NextResponse.json({ error: "Missing placeId" }, { status: 400 });
  }

  try {
    const url = new URL(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`
    );
    if (sessionToken) url.searchParams.set("sessionToken", sessionToken);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    });

    if (!res.ok) {
      console.error("Place details error:", res.status, await res.text());
      return NextResponse.json({ error: "Lookup failed" }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({
      name: data.displayName?.text || "",
      website: stripTracking(data.websiteUri || ""),
      mapsUri: data.googleMapsUri || "",
    });
  } catch (error) {
    console.error("Place details fetch failed:", error);
    return NextResponse.json({ error: "Lookup failed" }, { status: 200 });
  }
}
