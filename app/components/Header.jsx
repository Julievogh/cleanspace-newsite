export default function Header() {
  return (
    <header className="bg-[#eaf6fb] py-6 w-full">
      <div className="grid-12 items-center">
        {/* Logo */}
        <div className="col-span-2 flex items-center">
          <img
            src="/icons/logo-stempel-stor.png"
            alt="CleanSpace logo"
            className="h-16"
          />
        </div>

        {/* Nav */}
        <nav className="col-span-6 flex justify-center gap-10 text-base font-medium text-brand-blue">
          <a href="#services" className="inline-flex items-center">
            Services
          </a>
          <a href="#about" className="inline-flex items-center">
            Om os
          </a>
          <a href="#contact" className="inline-flex items-center">
            Kontakt
          </a>
          <a href="#team" className="inline-flex items-center">
            Bliv en del af teamet
          </a>
        </nav>

        {/* Knapper */}
        <div className="col-span-4 flex justify-end gap-4">
          <a href="#offer" className="btn-primary">
            Få et tilbud
          </a>
          <a href="#contact" className="btn-secondary">
            Kontakt Os
          </a>
        </div>
      </div>
    </header>
  );
}
