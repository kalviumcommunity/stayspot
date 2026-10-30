import Link from "next/link";
import type { Stay } from "../lib/stays";

// TODO (Task 3 — images): replace the plain <img> below with next/image (<Image />).
//   - give it width & height (or `fill` + a sized parent) so the card doesn't jump
//     while the photo loads (Cumulative Layout Shift),
//   - add a `sizes` hint since the card width changes with the grid,
//   - remote images need the host allowed in next.config.mjs (Task 4).
// Do NOT keep this as a raw <img> — that skips Next's image optimisation entirely.
export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link href={`/stay/${stay.id}`} className="card">
      <img src={stay.image} alt={stay.name} className="card-img" />
      <div className="card-body">
        <h3>
          {stay.emoji} {stay.name}
        </h3>
        <p className="muted">{stay.location}</p>
        <p className="price">
          ${stay.pricePerNight}
          <span>/night</span> · ⭐ {stay.rating}
        </p>
      </div>
    </Link>
  );
}
