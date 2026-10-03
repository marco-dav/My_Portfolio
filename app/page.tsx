import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Projects />
      <TechStack />
      <Certificates />  
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
