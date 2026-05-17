import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Henrique — Backend + AI Engineer",
    short_name: "codennomad",
    description:
      "Mid-level Backend + AI Engineer specializing in AI systems, cognitive pipelines, and high-performance architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#a855f7",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  }
}
