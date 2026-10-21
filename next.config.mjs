/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO (Task 5 — images): next/image blocks remote image hosts by default, so the
  // stay photos (from https://picsum.photos) will error until you allow that host.
  // Add an images.remotePatterns entry, e.g.
  //
  //   images: {
  //     remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  //   },
  //
  // (If you choose a STATIC EXPORT deploy instead of Vercel/Netlify, you will also
  // need `output: "export"` and `images.unoptimized: true`. See the Deployment
  // section of the assignment before adding those.)
};

export default nextConfig;
