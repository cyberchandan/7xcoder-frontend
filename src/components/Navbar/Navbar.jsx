

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ onEnquiryClick }) {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block w-full text-lg ${
      isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-slate-900/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            7xcoder
          </span>
        </NavLink>

        {/* DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
          }>
            About
          </NavLink>

          <NavLink to="/career" className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
          }>
            Career
          </NavLink>

          <button
            onClick={onEnquiryClick}
            className="bg-cyan-500 text-black px-4 py-1 rounded-full hover:bg-cyan-400 transition"
          >
            Enquire Now
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU – FIXED */}
      {open && (
        <div className="lg:hidden bg-slate-900 px-4 pb-4
                        flex flex-col items-start gap-4 text-sm">

          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/career" className={linkClass} onClick={() => setOpen(false)}>
            Career
          </NavLink>

          <button
            onClick={() => {
              onEnquiryClick();
              setOpen(false);
            }}
            className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-400 transition"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}

