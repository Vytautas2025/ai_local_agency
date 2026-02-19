import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tier3Labs — Dominate the Google Maps Top 3";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle green glow top-left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 500,
            height: 400,
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(0,230,118,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #00E676, #00C853)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="#0D1117"
              />
            </svg>
          </div>
          <span
            style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 800 }}
          >
            Tier3Labs
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: 68,
            fontWeight: 800,
            textAlign: "center",
            margin: "0 0 24px",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          Dominate the Google Maps Top 3
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            color: "#8B949E",
            fontSize: 28,
            textAlign: "center",
            margin: "0 0 40px",
            display: "flex",
          }}
        >
          Local SEO &amp; AI Search Optimization
        </p>

        {/* Green stat pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(0,230,118,0.1)",
            border: "1px solid rgba(0,230,118,0.3)",
            borderRadius: 50,
            padding: "12px 28px",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00E676",
              display: "flex",
            }}
          />
          <span style={{ color: "#00E676", fontSize: 22, fontWeight: 700 }}>
            70% of local search traffic converts from the Top 3
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
