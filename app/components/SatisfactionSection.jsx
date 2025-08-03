import { ChevronDown } from "lucide-react";

export default function SatisfactionSection() {
  return (
    <section className="relative bg-brand-sky py-16 overflow-hidden">
      {/* Centered 10/12 container */}
      <div className="grid-12">
        <div className="content-10col relative bg-[#D0E9F2] p-8 md:p-12 overflow-hidden">
          {/* Top wave cut-out: overlays container background with parent background */}
          <div className="absolute top-0 left-0 w-full h-24 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* More pronounced wave curve */}
              <path
                d="M0,120 C360,-40 1080,200 1440,60 L1440,0 L0,0 Z"
                fill="var(--brand-sky)"
              />
            </svg>
          </div>

          {/* Content inside wave */}
          <div className="relative mt-16 text-center text-brand-blue">
            <h2 className="text-3xl md:text-4xl font-bold">
              Er du tilfreds med din rengøring?
            </h2>
            <p className="text-lg md:text-xl font-medium text-brand-yellow mt-2 mb-8">
              Fleksibelt arbejde med ansvar og frihed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed text-base md:text-lg">
              <p>
                Vores bedste salgskonsulent har arbejdet i branchen i over 30
                år. Vi er stolte af vores ekspertise, gode priser og grundige
                service. Dygtige medarbejdere og ansvarlig drift – kvindeledet
                og loyale.
              </p>
              <p>
                Vi tilbyder et skræddersyet tilbud til din virksomhed, vi sender
                en konsulent ud for at observere jeres lokaler. Derefter sender
                vi jer et tilbud pr. mail, og følger op med et opkald. Gratis og
                uforpligtende!
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <ChevronDown className="w-8 h-8 text-brand-blue animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
