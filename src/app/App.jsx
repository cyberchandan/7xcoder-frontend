import { useState, useEffect } from "react"; // 👈 added useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HeroCarousel from "../components/Hero/HeroCarousel";
import Projects from "../components/Projects/Projects";
import AllProjects from "../components/Projects/AllProjects";
import Technologies from "../components/Technologies/Technologies";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Partners from "../components/Partners/Partners";
import EnquiryChat from "../components/Enquiry/EnquiryChat";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Career from "../components/Career/Career";
import MaintenanceModal from "../components/MaintenanceModal/MaintenanceModal";

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // ✅ NEW FEATURE 1: Maintenance Mode State
  const [showMaintenance, setShowMaintenance] = useState(true);

  // ✅ NEW FEATURE 2: Lock Background Scroll When Modal Open
  useEffect(() => {
    if (showMaintenance) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMaintenance]);

  return (
    <BrowserRouter>
      <MainLayout onEnquiryClick={() => setEnquiryOpen(true)}>

        {/* ✅ NEW FEATURE 3: Global Maintenance Modal */}
        <MaintenanceModal
          isOpen={showMaintenance}
          onClose={() => setShowMaintenance(false)}
          autoClose={false}
          duration={5000}
        />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <Projects />
                <Technologies />
                <WhyChoose />
                <Partners />
                <Contact />
              </>
            }
          />

          {/* ALL PROJECTS PAGE */}
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />

        </Routes>

        <EnquiryChat
          open={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
        />

      </MainLayout>
    </BrowserRouter>
  );
}
