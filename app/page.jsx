// src/app/page.jsx
import Head from "next/head";
import Image from "next/image";

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
      <Head>
        <title>
          CleanSpace | Professionel erhvervsrengøring i København &
          Storkøbenhavn
        </title>
        <meta
          name="description"
          content="CleanSpace leverer skræddersyet erhvervsrengøring i hele Storkøbenhavn – fra kontorer til boligforeninger. Få et tilbud i dag."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cleanspace.dk/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CleanSpace",
              image: "https://www.cleanspace.dk/images/middlephoto1.png",
              "@id": "https://www.cleanspace.dk",
              url: "https://www.cleanspace.dk",
              telephone: "+45-12345678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Din adresse",
                addressLocality: "København",
                postalCode: "1234",
                addressCountry: "DK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 55.6761,
                longitude: 12.5683,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </Head>

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

      {/* Hero / midtbillede med optimeret Next Image */}
      <div className="relative -mt-18 z-10">
        <Image
          src="/images/middlephoto1.png"
          alt="Erhvervsrengøring i kontor"
          width={1440} // oprindelig bredde på billedet
          height={889} // oprindelig højde på billedet
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      <FadeInSection>
        <ContactForm />
      </FadeInSection>

      <FadeInSection>
        {/* Artikelsektion klar til content */}
        {/* <ArticlesSection /> */}
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}
