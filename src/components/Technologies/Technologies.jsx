const techs = [
  { name: "React", icon: "⚛️", desc: "Fast & Interactive UI" },
  { name: "Node.js", icon: "🟢", desc: "Secure Backend" },
  { name: "MongoDB", icon: "🍃", desc: "Scalable Database" },
  { name: "Tailwind", icon: "🎨", desc: "Modern Styling" },
  { name: "AWS", icon: "☁️", desc: "Cloud Hosting" },
  { name: "Firebase", icon: "🔥", desc: "Realtime Services" },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl mb-12">Technologies We Use</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group bg-slate-900 rounded-xl p-6 flex flex-col items-center gap-3
                         hover:-translate-y-2 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <div className="text-4xl group-hover:scale-110 transition">
                {tech.icon}
              </div>
              <h3 className="text-sm font-semibold text-cyan-400">
                {tech.name}
              </h3>
              <p className="text-xs text-slate-400">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
