import { useState } from "react";

export default function ApplyModal({ open, onClose, openings }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    tech: "",
    resume: null,
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    console.log("Applicant Data:", Object.fromEntries(formData));

    // 🔌 Backend later
    // fetch("/api/apply", { method: "POST", body: formData })

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/70 flex items-center justify-center px-4">
      <div className="bg-slate-900 w-full max-w-xl rounded-2xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-6 text-cyan-400">
          Apply at 7xcoder
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          />

          <select
            name="role"
            required
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          >
            <option value="">Select Opening</option>
            {openings.map((job, i) => (
              <option key={i}>{job}</option>
            ))}
            <option>Other</option>
          </select>

          <select
            name="experience"
            required
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          >
            <option value="">Experience Level</option>
            <option>Fresher</option>
            <option>0–1 Year</option>
            <option>1–3 Years</option>
            <option>3+ Years</option>
          </select>

          <input
            name="tech"
            placeholder="Primary Tech Stack (React, Node, etc.)"
            onChange={handleChange}
            className="w-full bg-slate-800 px-4 py-2 rounded"
          />

          <input
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full text-sm"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-400 transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}
