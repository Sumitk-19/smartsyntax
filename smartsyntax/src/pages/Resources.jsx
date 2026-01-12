import { useState } from "react";

const resources = [
  { category: "DSA", title: "Striver SDE Sheet", link: "https://takeuforward.org" },
  { category: "DSA", title: "NeetCode 150", link: "https://neetcode.io" },
  { category: "Aptitude", title: "RS Aggarwal Quant", link: "https://www.scribd.com/document/901477674/Rs-Aggarwal-Quantitative-Aptitude-New-Em" },
  { category: "Core CS", title: "DBMS Interview Notes", link: "https://example.com" },
  { category: "Resume", title: "ATS Resume Template", link: "https://example.com" },
  { category: "Company Prep", title: "GfG 160 - 160 Days of Problem Solving", link: "https://www.geeksforgeeks.org/courses/gfg-160-series" }
];

export default function Resources() {
  const [search, setSearch] = useState("");

  const filtered = resources.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl text-cyan-400 font-bold mb-6">
        Placement & Interview Resources
      </h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search DSA, Resume, DBMS, Company..."
        className="w-full max-w-xl mb-8 p-3 bg-black border border-cyan-400 rounded-lg outline-none"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-lg hover:shadow-glow transition"
          >
            <p className="text-cyan-400 text-sm">{r.category}</p>
            <h3 className="font-semibold mt-1">{r.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
