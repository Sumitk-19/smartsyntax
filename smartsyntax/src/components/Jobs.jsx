import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzYqs7JSVscXyP8jQ6HfB5YYtgQyw6u7NkRTW7uZPbDF5ciW-AF3x2dLv7Tji-3KLtj/exec")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Job fetch error:", err));
  }, []);

  return (
    <section id="jobs" className="px-4 py-12">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Latest Opportunities
      </h2>

      <div className="grid gap-6">
        {jobs.map((job, i) => (
          <div key={i} className="glass p-4 rounded-xl">
            <div className="flex items-center gap-3">
                <img
                 src={job.LogoURL}
                 onError={(e) => (e.target.src = "/logo-placeholder.png")}
                 className="w-10 h-10 rounded"
                />
              <div>
                <h3 className="font-semibold">{job.Role}</h3>
                <p className="text-sm text-gray-400">{job.Company}</p>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <p>💰 {job.Salary}</p>
              <p>📍 {job.Location}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {job.Tags &&
                job.Tags.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400 rounded"
                  >
                    {tag.trim()}
                  </span>
                ))}
            </div>

            <a
             href={job.ApplyLink?.startsWith("http") ? job.ApplyLink : `https://${job.ApplyLink}`}
             target="_blank"
             rel="noopener noreferrer"
             className="block text-center mt-4 bg-cyan-500 text-black py-2 rounded-lg shadow-glow"
            >
             Apply Now
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}
