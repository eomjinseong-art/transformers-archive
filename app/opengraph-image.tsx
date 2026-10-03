import { ImageResponse } from "next/og";

export const alt = "트랜스포머 아카이브";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0B0D10",
          color: "#E8E2D6",
          padding: "72px",
        }}
      >
        <div style={{ color: "#C6A75E", fontSize: 28, letterSpacing: 6 }}>TRANSFORMERS ARCHIVE</div>
        <div style={{ marginTop: 24, fontSize: 68, lineHeight: 1.15 }}>트랜스포머 아카이브</div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#9AA3AD" }}>
          2007–2023 · 실사 7편 · 영화 속 실제 차량
        </div>
      </div>
    ),
    { ...size },
  );
}
