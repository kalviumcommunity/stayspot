"use client";

import { useState } from "react";
import { stays } from "../lib/stays";
import StayCard from "../components/StayCard";

// TODO (Task 1 — Server vs Client Components): this ENTIRE page is a Client Component
// ("use client" at the top) only because of the search box's useState. That ships the
// whole grid as client JS.
//
// Refactor so that:
//   - this page becomes a SERVER Component (remove "use client"),
//   - only the interactive search moves into its own Client Component
//     (e.g. components/SearchBar.tsx with "use client"),
//   - the server page renders the heading + grid.
//
// Decide where the filtering lives and what stays on the server vs the client.
export default function HomePage() {
  const [query, setQuery] = useState("");

  const visible = stays.filter((s) =>
    (s.name + " " + s.location).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h1>Find a place to stay</h1>
      <input
        className="search"
        placeholder="Search by name or city…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid">
        {visible.map((s) => (
          <StayCard key={s.id} stay={s} />
        ))}
      </div>
    </section>
  );
}
