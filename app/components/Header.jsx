export default function Header() {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="CleanSpace logo" className="h-12" />
        <span className="font-bold text-xl text-brand-blue">CleanSpace</span>
      </div>
      <nav className="flex items-center gap-4">
        <a href="#services" className="hover:text-brand-turquoise">
          Services
        </a>
        <a href="#about" className="hover:text-brand-turquoise">
          Om os
        </a>
        <a href="#contact" className="hover:text-brand-turquoise">
          Kontakt
        </a>
        <a href="#team" className="hover:text-brand-turquoise">
          Bliv en del af teamet
        </a>
        <a href="#offer" className="btn-primary">
          Få et tilbud
        </a>
      </nav>
    </header>
  );
}
