const partners = [
  { name: "Local Businesses", icon: "🏪" },
  { name: "Startup Partners", icon: "🚀" },
  { name: "Technology Partners", icon: "🤝" },
];

export default function Partners() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl mb-12">Our Partners</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-slate-900 rounded-xl p-8 flex flex-col items-center gap-4
                         hover:scale-105 transition duration-300
                         hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]"
            >
              <div className="text-5xl">{p.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-400">
                {p.name}
              </h3>
              <p className="text-sm text-slate-400">
                Trusted collaborations for long-term growth
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
