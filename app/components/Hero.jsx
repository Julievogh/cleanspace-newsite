import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      aria-label="Rengøring af specialister"
      className="hero-gradient relative flex min-h-[600px] w-full items-center overflow-hidden py-14 text-white"
      style={{
        background: "linear-gradient(to bottom right, #0a2656, #3399bc)",
      }}
    >
      <div className="relative mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-12">
        <div className="z-10 md:col-span-6">
          <span className="overskrift">25 års rengøringserfaring</span>

          <h1 className="mb-4 text-[48px] font-extrabold leading-[1.1] tracking-[-0.5px] drop-shadow-lg md:text-[72px]">
            Rengøring af <br />
            specialister
          </h1>

          <p className="mb-7 max-w-lg text-base text-white/90">
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

          <div className="mt-7 flex flex-wrap gap-5">
            <Button as="a" href="#contact" variant="third">
              Kontakt CleanSpace &gt;
            </Button>
            <Button
              as="a"
              href="tel:+4560133424"
              variant="primary"
              className="rounded-2xl px-6 py-3 shadow-lg"
            >
              +45 60 13 34 24
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:col-span-6 md:justify-end">
          <div className="relative aspect-[785/764] w-full max-w-[560px]">
            <Image
              src="/images/cleanspace-team-original.png"
              alt="CleanSpace-teamet med Nicolaj i portrættet nederst til højre"
              fill
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1300px) 45vw, 560px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}