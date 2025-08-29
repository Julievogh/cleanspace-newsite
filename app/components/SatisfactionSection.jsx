import { ChevronDown } from "lucide-react";

export default function SatisfactionSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Lyseblå bølge-baggrund - dækker hele teksten */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#D0E9F2"
            d="M0,120 C360,-40 1080,300 1440,100 L1440,600 L0,600 Z"
          />
        </svg>
      </div>

      {/* Teksten ovenpå bølgen */}
      <div className="relative z-10 grid-12 pt-32 pb-10">
        <div className="content-10col text-center text-brand-blue">
          <h2 className="text-3xl md:text-4xl font-bold">
            Er du tilfreds med din rengøring?
          </h2>
          <p className="text-lg md:text-xl font-medium text-brand-yellow mt-2 mb-8">
            Fleksibelt arbejde med ansvar og frihed
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed text-base md:text-lg">
            <p>
              Vores bedste salgskonsulent har arbejdet i branchen i over 30 år.
              Vi er stolte af vores ekspertise, gode priser og grundige service.
              Dygtige medarbejdere og ansvarlig drift – kvindeledet og loyale.
            </p>
            <p>
              Vi tilbyder et skræddersyet tilbud til din virksomhed, vi sender
              en konsulent ud for at observere jeres lokaler. Derefter sender vi
              jer et tilbud pr. mail, og følger op med et opkald. Gratis og
              uforpligtende!
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <ChevronDown className="w-8 h-8 text-brand-blue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
