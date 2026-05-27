import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFE600",
          border: "6px solid #1a1a1a",
          fontWeight: 900,
          color: "#1a1a1a",
          fontFamily: "system-ui",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
