"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      onClick={scrollToTop}
      className=" fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-accent text-accent-ink flex items-center justify-center shadow-lg cursor-pointer transition-transform transform hover:text-text hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Volver arriba"
    >
      <ArrowUp size={18} />
    </button>
  );
}