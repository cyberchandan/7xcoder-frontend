import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Big or Small Business",
    desc: "One Step Digital Solution – 7xcoder",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title: "Grow Your Business Online",
    desc: "Website, App & Software at Affordable Price",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Remote Developers",
    desc: "Same Quality, 3–5x Cheaper",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              {slide.title}
            </h1>
            <p className="mt-4 text-cyan-400 text-sm sm:text-lg">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
