// src/components/Services.jsx
import Button from "./Button";

const services = [
  {
    title: "Erhvervsrengøring",
    headline: "Rengøring i dybden",
    desc: "Vi gør din arbejdsplads skinnende ren og sund – fra skrivebord til kantine og toiletfaciliteter. Tilpasset netop jeres behov.",
    icon: "/icons/vacuum-icon.svg",
    image: "/images/erhvervsreng.png",
    href: "/services/erhvervsrengoering",
  },
  {
    title: "Hovedrengøring",
    headline: "Grundig hovedrengøring",
    desc: "Når det skal være ekstra grundigt: Alt fra afkalkning til fjernelse af genstridigt snavs, så dit miljø føles helt nyt.",
    icon: "/icons/bucket-icon.svg",
    image: "/images/hovedrengøring.png",
    href: "/services/hovedrengoering",
  },
  {
    title: "Trappevask",
    headline: "Skinnende trapper",
    desc: "Faste eller engangsbesøg – vi sørger for pæne, trygge opgange i både boligforeninger og erhverv.",
    icon: "/icons/broom-icon.svg",
    image: "/images/trappevask.png",
    href: "/services/trappevask",
  },
  {
    title: "Vinduespolering",
    headline: "Perfekt vinduespolering",
    desc: "Klare ruder hver gang – uden striber eller skjolder. Vi polerer både indendørs og udendørs.",
    icon: "/icons/window-icon.svg",
    image: "/images/vinduespolering.png",
    href: "/services/vinduespolering",
  },
];

export default function Services() {
  return (
    <section className="py-14 bg-brand-sky/40">
      <div className="grid-12 gap-y-10">
        {/* Overskrift */}
        <div className="col-span-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Hvad vi tilbyder
          </h2>
        </div>

        {/* Service-kort */}
        {services.map((srv, idx) => (
          <div key={srv.title} className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl border border-brand-sky overflow-hidden shadow-lg">
              {/* Billede */}
              <div
                className={`w-full h-56 md:h-64 lg:h-72 ${
                  idx % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tekst */}
              <div
                className={`flex flex-col p-6 md:p-10 ${
                  idx % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-2">
                  {srv.title}
                </h3>

                <div className="flex items-center gap-3 mb-3">
                  <img src={srv.icon} alt="" className="w-6 h-6" />
                  <p className="text-xl md:text-2xl font-semibold text-brand-blue leading-tight">
                    {srv.headline}
                  </p>
                </div>

                <p className="text-sm md:text-base text-brand-blue/90 leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <Button
                  variant="secondary"
                  as="a"
                  href={srv.href}
                  className="mt-auto inline-block px-6 py-2 border-2 border-brand-blue rounded-lg text-brand-blue font-bold text-base hover:bg-brand-blue hover:text-white transition"
                >
                  Læs Mere &gt;
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Alle Services-knap */}
        <div className="col-span-12 text-center">
          <Button
            variant="primary"
            as="a"
            href="/services"
            className="px-8 py-3 rounded-xl text-base font-semibold"
          >
            Alle Services
          </Button>
        </div>
      </div>
    </section>
  );
}
