import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-label="Hero sektion - Rengøring af specialister"
      className="hero-gradient relative w-full text-white min-h-[600px] flex items-center py-14 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #0a2656, #3399bc)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center relative max-w-[1300px] mx-auto px-6 gap-8">
        {/* Venstre: tekst og knapper */}
        <div className="md:col-span-6 z-10">
          <span className="overskrift">25 års rengøringserfaring</span>

          <h1 className="text-[48px] md:text-[72px] font-extrabold leading-[1.1] tracking-[-0.5px] drop-shadow-lg mb-4">
            Rengøring af <br />
            specialister
          </h1>

          <p className="mb-7 text-base text-white/90 max-w-lg">
            Hos CleanSpace har vi leveret professionel rengøring i mere end tre
            årtier. Som et familieejet firma bygger vi på værdier som tillid,
            grundighed og personlig service.
            <br />
            <br />
            Vi tilbyder skræddersyede løsninger inden for erhvervsrengøring og
            relaterede services, altid med fokus på at skabe et rent og
            indbydende miljø.
            <br />
            <br />
            Kontakt os i dag for et gratis og uforpligtende tilbud – din
            tilfredshed er vores prioritet.
            <br />
            <strong>Vores nøgleord: Effektiv, ansvarlig, pålidelig.</strong>
          </p>

          <div className="flex gap-5 mt-7">
            <Button as="a" href="#contact" variant="third">
              Kontakt CleanSpace &gt;
            </Button>
            <Button
              variant="primary"
              as="a"
              href="tel:+4523848088"
              className="rounded-2xl px-6 py-3 shadow-lg"
            >
              +45 23 84 80 88
            </Button>
          </div>
        </div>

        {/* Højre: billede */}
        <div className="md:col-span-6 flex justify-end">
          <div className="relative w-[560px] h-[560px]">
            <Image
              src="/images/Hero2.png"
              alt="Professionelt rengøringsteam"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
