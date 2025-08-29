// src/app/page.jsx (eller Home.jsx)
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Satisfaction from "./components/SatisfactionSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import ArticlesSection from "./components/Articles";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Testimonial
          quote="CleanSpace har gjort rent for os i 2 år – vi er meget tilfredse. De er serviceorienterede og altid til at få fat på. Vi kan klart anbefale dem."
          author="– Kirsten, Kontorchef"
          logo="/logos/adlex.png"
        />
      </FadeInSection>
      <FadeInSection>
        <Satisfaction />
      </FadeInSection>
      <div className="relative -mt-18 z-10">
        <img
          src="/images/middlephoto1.png"
          alt="stockimage"
          className="w-full h-auto object-cover"
        />
      </div>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
      <FadeInSection>
        {/*
        Opdater med rigitge artikler
        <ArticlesSection />*/}
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}
