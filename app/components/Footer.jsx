export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-sm">
        {/* Left section */}
        <div className="flex flex-col items-start text-center md:text-left space-y-2">
          <strong>Kontakt os</strong>
          <a href="mailto:info@cleanspace.dk" className="hover:underline">
            info@cleanspace.dk
          </a>
          <a href="tel:+4522334455" className="hover:underline">
            +45 23 84 80 88
          </a>
          <div>CVR: 34851077 · Solrød Strandvej 98</div>
          <div>
            &copy; {new Date().getFullYear()} CleanSpace. Alle rettigheder
            forbeholdes.
          </div>
        </div>

        {/* Center (logo) */}
        <div className="flex justify-center">
          <img
            src="/icons/logo-stempel-lille.png"
            alt="CleanSpace logo"
            className="h-28 md:h-40"
          />
        </div>

        {/* Right section */}
        <div className="text-center md:text-justify md:max-w-sm mx-auto md:mx-0">
          <p>
            CleanSpace er en rengøringsvirksomhed, med over 30 års erfaring. Vi
            er dedikerede til at skabe sunde arbejdsmiljøer ved at anvende
            miljørigtige produkter, der skåner både mennesker og planeten. Vores
            medarbejdere er veluddannede og eksperter inden for deres felt,
            hvilket sikrer service i højeste kvalitet.
          </p>
        </div>
      </div>
    </footer>
  );
}
