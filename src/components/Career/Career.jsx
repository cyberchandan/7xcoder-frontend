// Career data (future me backend / API se aa sakta hai)
import { useState } from "react";
import ApplyModal from "./ApplyModal";

const careerData = {
    intro: {
      title: "Build Your Career with 7xcoder",
      desc: "We believe in skills, performance, and growth. At 7xcoder, you work on real-world projects with a flexible remote-first culture.",
    },
  
    openings: [
      {
        role: "Frontend Developer (React)",
        type: "Remote | Full-time / Internship",
        stack: ["React", "Tailwind", "JavaScript"],
      },
      {
        role: "Backend Developer (Node.js)",
        type: "Remote | Project-based",
        stack: ["Node.js", "Express", "MongoDB"],
      },
      {
        role: "Full Stack Developer",
        type: "Remote | Full-time",
        stack: ["React", "Node.js", "MongoDB"],
      },
      {
        role: "Software Intern",
        type: "Remote | Internship",
        stack: ["Any one tech stack"],
      },
    ],
  
    process: [
      {
        step: "Resume Screening",
        desc: "We review your resume to understand your skills, projects, and tech exposure.",
      },
      {
        step: "Online Coding Test",
        desc: "A practical coding task based on your applied tech stack.",
      },
      {
        step: "Technical Interview",
        desc: "Discussion on problem-solving, projects, and real-world scenarios.",
      },
      {
        step: "Internship / Trial Phase",
        desc: "Work on live tasks to evaluate performance and learning ability.",
      },
      {
        step: "Full-time / Project-based Role",
        desc: "Based on performance, you join as a full-time or project-based developer.",
      },
    ],
  
    growth: {
      title: "Growth & Revenue Model",
      points: [
        "Performance-based growth and role upgrade",
        "Project-based revenue sharing",
        "Tech stack mastery matters more than years of experience",
        "High performers get priority on premium client projects",
      ],
    },
  };
  
  export default function Career() {
    const [applyOpen, setApplyOpen] = useState(false);

const openings = careerData.openings.map(o => o.role);

    return (
      <section className="pt-28 pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4">
  
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 text-center md:text-left">
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Careers at{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
        7xcoder
      </span>
    </h1>
    <p className="text-slate-400 max-w-3xl">
      {careerData.intro.desc}
    </p>
  </div>

  <button
    onClick={() => setApplyOpen(true)}
    className="mt-6 md:mt-0 bg-cyan-500 text-black px-8 py-3 rounded-full
               hover:bg-cyan-400 transition font-medium"
  >
    Apply Now
  </button>
</div>

  
          {/* JOB OPENINGS */}
          <div className="mb-28">
            <h2 className="text-2xl mb-12 text-cyan-400 text-center">
              Current Openings
            </h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              {careerData.openings.map((job, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur rounded-2xl p-8
                             border border-white/5 hover:border-cyan-400/30
                             hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {job.role}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {job.type}
                  </p>
  
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-slate-800 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* HIRING PROCESS */}
          <div className="mb-28">
            <h2 className="text-2xl mb-12 text-cyan-400 text-center">
              Our Hiring Process
            </h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              {careerData.process.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-slate-900/60 backdrop-blur rounded-xl p-6
                             border border-white/5 hover:border-green-400/30 transition"
                >
                  <div className="text-cyan-400 font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {step.step}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* GROWTH & REVENUE */}
          <div className="text-center">
            <h2 className="text-2xl mb-6 text-cyan-400">
              {careerData.growth.title}
            </h2>
  
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {careerData.growth.points.map((point, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur rounded-xl p-6 text-sm
                             border border-white/5 hover:scale-[1.03] transition"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
  
        </div>
        <ApplyModal
  open={applyOpen}
  onClose={() => setApplyOpen(false)}
  openings={openings}
/>

      </section>
    );
  }

  