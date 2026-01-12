import { useState } from "react";

const materials = [
  { category: "DSA", title: "Striver SDE Sheet", link: "https://takeuforward.org" },
  { category: "DSA", title: "NeetCode 150", link: "https://neetcode.io" },
  { category: "Aptitude", title: "RS Aggarwal Quant PDF", link: "https://..." },
  { category: "Core CS", title: "DBMS Interview Notes", link: "https://..." },
  { category: "Resume", title: "ATS Resume Template", link: "https://..." },
  { category: "Company Prep", title: "Infosys Interview Questions", link: "https://..." }
];

export default function Resources() {
  const [search, setSearch] = useState("");

  const filtered = materials.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl text-cyan-400 font-bold mb-4">
        Placement & Interview Resources
      </h1>

      <input
        placeholder="Search DSA, Resume, OS, DBMS, Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 bg-black border border-cyan-400 rounded-lg"
      />

      <div className="grid gap-4">
        {filtered.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target="_blank"
            className="glass p-4 rounded-lg hover:shadow-glow"
          >
            <p className="text-cyan-400">{r.category}</p>
            <h3 className="font-semibold">{r.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
