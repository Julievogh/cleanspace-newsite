import Button from "./Button";

const services = [
  {
    title: "Erhvervsrengøring",
    headline: "Rengøring i dybden", // <- ny tekst her!
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
      <div className="grid-12 max-w-4xl mx-auto">
        {/* Headline */}
        <div className="col-span-12 mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">
            Hvad vi tilbyder
          </h2>
        </div>
        {/* Services */}
        {services.map((srv, idx) => (
          <div key={srv.title} className="col-span-12 mb-6">
            {/* Her bruger vi kun 10 kolonner, og centrerer med mx-auto */}
            <div className="grid grid-cols-10 mx-auto items-stretch bg-white rounded-2xl border border-brand-sky overflow-hidden shadow-lg">
              {/* IMAGE */}
              <div
                className={
                  idx % 2 === 0
                    ? "col-span-5 order-1"
                    : "col-span-5 col-start-6 order-2"
                }
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="object-cover w-full h-full min-h-[220px] max-h-[340px]"
                  loading="lazy"
                />
              </div>
              {/* TEXT */}
              <div
                className={
                  idx % 2 === 0
                    ? "col-span-5 flex flex-col justify-center py-12 px-10 gap-4 order-2"
                    : "col-span-5 flex flex-col justify-center py-12 px-10 gap-4 order-1"
                }
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-4 text-center">
                  {srv.title}
                </h3>
                <img
                  src={srv.icon}
                  alt=""
                  className="w-8 h-8 mb-2 shrink-0 grow-0 basis-auto align-center"
                  style={{ maxWidth: "2rem", maxHeight: "2rem" }}
                />

                <p className="font-extrabold text-brand-blue text-xl md:text-2xl mb-3 w-full text-left">
                  {srv.headline}
                </p>
                <p className="text-base md:text-lg text-brand-blue mb-8 w-full text-left leading-relaxed">
                  {srv.desc}
                </p>
                <Button
                  variant="secondary"
                  as="a"
                  href={srv.href}
                  className="mx-auto mt-2 text-brand-blue border-2 border-brand-blue px-10 py-3 rounded-none font-bold text-lg bg-white hover:bg-brand-blue hover:text-white transition"
                  style={{ minWidth: 220 }}
                >
                  Læs Mere &gt;
                </Button>
              </div>
            </div>
          </div>
        ))}
        {/* Knappen under services */}
        <div className="col-span-12 flex justify-center mt-7">
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
