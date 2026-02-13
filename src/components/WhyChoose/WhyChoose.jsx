
export default function WhyChoose() {
  return (
  <>
  <section className="py-24 bg-slate-950">
    
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl mb-12">Why We Are Affordable</h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* ✅ 7XCODER (ANIMATED) */}
          <div className="glow-border">
            <div className="glow-inner p-8 rounded-xl text-left">
              <h3 className="text-xl mb-4 text-cyan-400 flex items-center gap-2">
                ⚡ 7xcoder
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>✔ No office rent</li>
                <li>✔ Remote developers</li>
                <li>✔ Direct client interaction</li>
                <li className="text-cyan-400 font-semibold">
                  ₹25k – ₹40k website
                </li>
              </ul>
            </div>
          </div>

          {/* ❌ OTHER COMPANIES */}
          <div className="bg-slate-900 p-8 rounded-xl text-left opacity-70">
            <h3 className="text-xl mb-4 flex items-center gap-2 text-red-400">
              ❌ Other Companies
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>✖ Office rent</li>
              <li>✖ Middle management</li>
              <li>✖ High overhead</li>
              <li className="text-red-400 font-semibold">
                ₹1L – ₹3L website
              </li>
            </ul>
          </div>

        </div>

        <p className="mt-10 text-cyan-400 font-medium">
          👉 Same quality but 3–5× cheaper
        </p>

      </div>
    </section>
  </>
    
  );
}
