import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/data"

export const runtime = "edge"
export const alt = `${siteConfig.name} — ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot-grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #1a1a2e 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            opacity: 0.7,
          }}
        />

        {/* Radial fade to center */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, #0a0a0f 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {/* Prompt line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "monospace",
              fontSize: 18,
              color: "#555570",
            }}
          >
            <span style={{ color: "#a855f7" }}>~/codennomad</span>
            <span>$ whoami</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#e0e0e0",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Gabriel{" "}
            <span
              style={{
                color: "#a855f7",
                textShadow: "0 0 40px rgba(168,85,247,0.5)",
              }}
            >
              Henrique
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: "#a855f7",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
          >
            {siteConfig.title}
          </div>

          {/* Bio */}
          <div
            style={{
              fontSize: 19,
              color: "#555570",
              maxWidth: 680,
              lineHeight: 1.6,
              marginTop: "4px",
            }}
          >
            Python · Rust · TypeScript · AI Systems · Distributed Architectures
          </div>

          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
              padding: "8px 16px",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.3)",
              borderRadius: "6px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#a855f7",
                boxShadow: "0 0 10px rgba(168,85,247,0.8)",
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "#a855f7",
                fontFamily: "monospace",
              }}
            >
              available for remote contracts
            </span>
          </div>
        </div>

        {/* URL watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 56,
            fontSize: 15,
            color: "#333350",
            fontFamily: "monospace",
          }}
        >
          codennomad.dev
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(to right, transparent 0%, #7c3aed 30%, #a855f7 50%, #7c3aed 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
