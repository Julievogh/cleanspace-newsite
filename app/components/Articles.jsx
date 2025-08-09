// components/ArticlesSection.jsx
import Image from "next/image";

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Gode råd ved valg af rengøringsleverandør",
      date: "15/02/2024",
      excerpt:
        "Hvordan vælger man den rette rengøringsleverandør? I bund og grund handler det om at forventningsafstemme. Her får I gode råd til netop det.",
      image: "/images/article1.png",
      link: "#",
    },
    {
      id: 2,
      title: "5 års Svanemærke-jubilæum",
      date: "15/02/2024",
      excerpt:
        "Hvordan vælger man den rette rengøringsleverandør? I bund og grund handler det om at forventningsafstemme. Her får I gode råd til netop det.",
      image: "/images/article2.png",
      link: "#",
    },
    {
      id: 3,
      title: "En guide til omhyggeligt rengøring – trin for trin",
      date: "15/02/2024",
      excerpt:
        "Hvordan vælger man den rette rengøringsleverandør? I bund og grund handler det om at forventningsafstemme. Her får I gode råd til netop det.",
      image: "/images/article3.png",
      link: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white bg-blue-900">
      {/* Lys bølge (hvid eller meget lys) */}
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EFF6FF" // meget lys blå/hvidlig
            d="M0,160 C360,320 1080,0 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Indhold */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-64 pb-20">
        <p className="text-yellow-400 font-bold">
          Lær mere om rengøring og produkter
        </p>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-4xl font-semibold text-white">
            Inspiration og artikler
          </h2>
          <a href="#" className="text-blue-300 hover:underline">
            Alle artikler &gt;&gt;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col bg-transparent">
              <div className="relative w-full h-56 overflow-hidden rounded">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-blue-300 mt-4">{article.date}</p>
              <h3 className="text-xl font-semibold mt-1 text-white">
                {article.title}
              </h3>
              <p className="text-sm text-white mt-2 leading-relaxed">
                {article.excerpt}
              </p>
              <a
                href={article.link}
                className="mt-3 text-blue-300 hover:underline"
              >
                Læs mere &gt;&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
