const aboutData = {
  whoWeAre: {
    title: "Who We Are",
    desc: `7xcoder is a remote-first software agency building affordable,
    scalable and high-quality digital products. We help startups,
    local businesses and growing companies convert ideas into reliable
    software without unnecessary overhead.`,
  },

  howWeWork: [
    {
      title: "Requirement First",
      icon: "📋",
      desc: "We understand your business goals before writing a single line of code.",
    },
    {
      title: "Remote & Agile",
      icon: "🌍",
      desc: "Our distributed team works in agile sprints for faster delivery.",
    },
    {
      title: "Direct Communication",
      icon: "💬",
      desc: "You communicate directly with developers. No middle layers.",
    },
    {
      title: "Quality & Delivery",
      icon: "🚀",
      desc: "Clean code, modern tech and on-time delivery are our standards.",
    },
  ],

  team: [
    "Remote full-time developers",
    "Part-time specialists",
    "Project-based engineers",
    "Interns & fresh talent under senior guidance",
  ],
};

export default function About() {
  return (
    <section className="pt-28 pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            7xcoder
          </span>
        </h1>

        <p className="text-slate-400 max-w-3xl mx-auto mb-20">
          A modern remote software agency focused on performance, scalability
          and affordability.
        </p>

        {/* WHO WE ARE */}
        <div className="mb-24">
          <h2 className="text-2xl mb-6 text-cyan-400">
            {aboutData.whoWeAre.title}
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {aboutData.whoWeAre.desc}
          </p>
        </div>

        {/* HOW WE WORK */}
        <div className="mb-28">
          <h2 className="text-2xl mb-14 text-cyan-400">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.howWeWork.map((item, i) => (
              <div
                key={i}
                className="group bg-slate-900/60 backdrop-blur rounded-2xl p-8 text-left
                           border border-white/5 hover:border-cyan-400/30
                           hover:-translate-y-1 transition-all duration-300
                           hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div>
          <h2 className="text-2xl mb-6 text-cyan-400">
            Our Team & Hiring Model
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed">
            We follow a flexible hiring model to maintain quality while keeping
            project costs affordable for our clients.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {aboutData.team.map((role, i) => (
              <div
                key={i}
                className="bg-slate-900/60 backdrop-blur rounded-xl p-6 text-sm
                           border border-white/5 hover:border-green-400/30
                           hover:scale-[1.03] transition-all"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
