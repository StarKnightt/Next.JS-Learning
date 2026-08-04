import { ImageResponse } from "next/og";

export const alt = "Next.js Learning by Prasen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFDF7",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "4px solid #1a1a1a",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            height: "8px",
            backgroundColor: "#FFE600",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFE600",
                border: "3px solid #1a1a1a",
                padding: "8px 16px",
                fontSize: "18px",
                fontWeight: 700,
                display: "flex",
              }}
            >
              Next.js 16
            </div>
            <div
              style={{
                backgroundColor: "#AAFF00",
                border: "3px solid #1a1a1a",
                padding: "8px 16px",
                fontSize: "18px",
                fontWeight: 700,
                display: "flex",
              }}
            >
              17 Chapters
            </div>
            <div
              style={{
                backgroundColor: "#00D4FF",
                border: "3px solid #1a1a1a",
                padding: "8px 16px",
                fontSize: "18px",
                fontWeight: 700,
                display: "flex",
              }}
            >
              Free & Open Source
            </div>
          </div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              display: "flex",
            }}
          >
            Next.js Learning
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#1a1a1a",
              opacity: 0.7,
              margin: 0,
              display: "flex",
            }}
          >
            Master Next.js from zero to production. By Prasen.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "3px solid #1a1a1a",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600, display: "flex" }}>
            prasen.dev
          </span>
          <span style={{ fontSize: "18px", opacity: 0.6, display: "flex" }}>
            App Router • Server Components • TypeScript • Tailwind
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
