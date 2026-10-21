import "./globals.css";
import type { Metadata } from "next";

// TODO (Task 7 — SEO/metadata): this metadata is too thin. Add a `description`,
// and consider a title template (e.g. `title: { default: "StaySpot", template: "%s · StaySpot" }`)
// so each stay page can set its own title. A Server Component can export metadata — a
// Client Component cannot, which matters for app/page.tsx (Task 1).
//
// TODO (Task 6 — fonts): load a font with next/font/google here (e.g. Inter), expose it
// as a CSS variable, and apply that variable to <body> so globals.css can use it.
export const metadata: Metadata = {
  title: "StaySpot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* This small logo lives in /public and is fine as a plain <img>. The LARGE
              stay photos in StayCard and the detail page are the ones to optimise. */}
          <img src="/logo.svg" alt="StaySpot logo" width={26} height={26} />
          <span>StaySpot</span>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
