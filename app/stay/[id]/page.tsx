import Link from "next/link";
import { getStay } from "../../../lib/stays";

// TODO (Task 2 — dynamic routes & not-found): this page is broken in two ways.
//   1. In Next.js 15, `params` is a PROMISE. Make this component `async` and
//      `await params` before reading `id` (fix the type too: Promise<{ id: string }>).
//   2. `getStay` returns `undefined` for a bad id (typo / deleted stay). Instead of the
//      non-null `!` hacks below that crash the page, call `notFound()` from "next/navigation"
//      so the proper 404 (your app/not-found.tsx, Task 3) renders.
//
// TODO (Task 4 — images): swap the <img> for next/image. This is the hero image, so give
// it `priority` (it's above the fold) plus width/height.
//
// TODO (Task 7 — SEO): export `generateMetadata({ params })` so each stay gets its own
// <title> and description (e.g. the stay name + location).
export default function StayPage({ params }: { params: { id: string } }) {
  const stay = getStay(params.id);

  return (
    <article className="detail">
      <Link href="/" className="back">
        ← Back to stays
      </Link>
      <img src={stay!.image} alt={stay!.name} className="detail-img" />
      <h1>
        {stay!.emoji} {stay!.name}
      </h1>
      <p className="muted">{stay!.location}</p>
      <p className="price">
        ${stay!.pricePerNight}
        <span>/night</span> · ⭐ {stay!.rating}
      </p>
      <p>{stay!.blurb}</p>
    </article>
  );
}
