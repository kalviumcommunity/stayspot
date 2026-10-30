/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO (Task 4 — images): next/image blocks remote image hosts by default, so the
  // stay photos (from https://picsum.photos) will error until you allow that host.
  // Add an images.remotePatterns entry, e.g.
  //
  //   images: {
  //     remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  //   },
  //
  // (Only if you choose a GITHUB PAGES static export: you will also need `output: "export"`,
  // `basePath`, `trailingSlash`, and `images.unoptimized: true`. See the Deployment
  // section of the assignment before adding those.)
};

export default nextConfig;
