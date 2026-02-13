import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children, onEnquiryClick }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onEnquiryClick={onEnquiryClick} />

      {/* navbar height compensation */}
      <main className="w-full pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
