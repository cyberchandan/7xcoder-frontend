import { useEffect, useState } from "react";

// 15s → 1min → 5min
const TIMINGS = [15000, 60000, 300000];

export default function EnquiryChat({ open, onClose }) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Navbar click → instant open
  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  // Auto popup timing (session based)
  useEffect(() => {
    const step = Number(sessionStorage.getItem("enquiry_step")) || 0;

    // already stopped for this session
    if (step >= TIMINGS.length) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, TIMINGS[step]);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);

    const step = Number(sessionStorage.getItem("enquiry_step")) || 0;
    sessionStorage.setItem("enquiry_step", step + 1);

    onClose();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill name and phone");
      return;
    }

    console.log("ENQUIRY DATA 👉", form);

    alert("Enquiry sent successfully!");

    // stop popup for this session
    sessionStorage.setItem("enquiry_step", TIMINGS.length);

    setForm({ name: "", phone: "", message: "" });
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-[92%] sm:w-80 max-w-sm bg-slate-900 rounded-xl ring-1 ring-cyan-400 shadow-2xl">
      <div className="flex justify-between items-center px-4 py-2 border-b border-slate-700">
        <span className="font-semibold">Enquiry</span>
        <button onClick={handleClose} className="text-lg">✕</button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-950"
          placeholder="Your Name"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-950"
          placeholder="Phone Number"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-950"
          placeholder="Your Requirement"
        />
        <button
          type="submit"
          className="w-full bg-cyan-500 text-black py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
