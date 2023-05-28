import Header from "../../components/landing/Header";
import Footer from "../../components/landing/Footer";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import Contact from "../../components/landing/Contact";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </section>
  );
}
