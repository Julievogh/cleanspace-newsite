import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue to-brand-turquoise text-white min-h-[600px] flex items-center py-14">
      <div className="grid-12 items-center relative">
        {/* Venstre: tekst og knapper */}
        <div className="col-span-6 z-10">
          <span className="block text-brand-yellow text-xl font-bold mb-2">
            25 års rengøringserfaring
          </span>
          <h1 className="text-4xl font-extrabold leading-tight mb-4 text-white">
            Rengøring af <br />
            specialister
          </h1>
          <p className="mb-7 text-base text-white/90 max-w-xl">
            Hos CleanSpace har vi leveret professionel rengøring i mere end tre
            årtier. Som et familieejet firma bygger vi på værdier som tillid,
            grundighed og personlig service. Vi forstår, at kvalitet og
            detaljeorienteret arbejde gør en forskel for din virksomhed.
            <br />
            <br />
            Vi tilbyder skræddersyede løsninger inden for erhvervsrengøring og
            relaterede services, altid med fokus på at skabe et rent og
            indbydende miljø. Lad os tage hånd om rengøringen, så du kan
            fokusere på det, der betyder mest for dig.
            <br />
            <br />
            Kontakt os i dag for et gratis og uforpligtende tilbud – din
            tilfredshed er vores prioritet.
            <br />
            Vores nøgleord: Effektiv, ansvarlig, pålidelig.
          </p>
          <div className="flex gap-5 mt-7">
            <Button variant="secondary">Kontakt &gt;</Button>
            <Button variant="primary" as="a" href="tel:+4523848088">
              +45 23 84 80 88
            </Button>
          </div>
        </div>
        {/* Højre: billede + grafik */}
        <div className="col-span-6 flex justify-end relative">
          <div className="relative w-[370px] h-[390px]">
            <img
              src="/images/hero-img.png"
              alt="Professionelt rengøringsteam"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
            {/* Mere SVG/grafik kan placeres her */}
          </div>
        </div>
      </div>
    </section>
  );
}
