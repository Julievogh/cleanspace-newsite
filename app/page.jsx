import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial
        quote="CleanSpace har gjort rent for os i 2 år – vi er meget tilfredse. De er serviceorienterede og altid til at få fat på. Vi kan klart anbefale dem."
        author="– Kirsten, Kontorchef, Adlex"
        logo="/logos/adlex.png"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
