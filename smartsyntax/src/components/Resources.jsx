export default function Resources() {
  const resources = [
    { title: "DSA Sheet", link: "https://bit.ly/dsa-sheet" },
    { title: "Aptitude PDF", link: "https://bit.ly/aptitude-pdf" },
    { title: "Resume Templates", link: "https://bit.ly/resume-templates" },
    { title: "Interview Questions", link: "https://bit.ly/interview-qa" }
  ];

  return (
    <section id="resources" className="px-4 py-12">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Placement Resources</h2>
      <div className="grid gap-4">
        {resources.map((r, i) => (
          <a key={i} href={r.link} target="_blank" className="glass p-4 rounded-lg hover:shadow-glow">
            {r.title}
          </a>
        ))}
      </div>
    </section>
  );
}
