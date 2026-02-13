import { useState } from "react";
import GoogleMap from "../Map/GoogleMap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Contact Us</h2>

        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-6 rounded-xl space-y-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 rounded bg-slate-950"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 rounded bg-slate-950"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 rounded bg-slate-950"
            />
            <button className="bg-cyan-500 text-black px-4 py-2 rounded">
              Submit
            </button>
          </form>

          {/* RIGHT: MAP */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl mb-2">Our Location</h3>
              <p className="text-sm text-slate-400">
                7xcoder – Remote Software Agency (India)
              </p>
            </div>

            <GoogleMap />
          </div>

        </div>
      </div>
    </section>
  );
}
