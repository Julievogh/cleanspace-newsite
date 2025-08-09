export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#E5F6FB] py-12 px-4 grid">
      <div className="w-full max-w-5xl bg-[#E5F6FB] border border-[#0a265633] rounded-lg p-8 text-center mx-auto">
        {/* Logo */}
        <img
          src="/icons/logo-stempel-stor.png"
          alt="CleanSpace logo"
          className="mx-auto mb-4 w-24 h-auto"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-[var(--brand-blue)] mb-1">
          Få et tilbud på rengøring
        </h2>
        <p className="text-[var(--brand-yellow)] font-bold mb-6">
          Gratis og uforpligtende
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <label className="form-label" htmlFor="company">
              Firma
            </label>
            <input className="form-input" id="company" type="text" required />
          </div>

          <div>
            <label className="form-label" htmlFor="name">
              Kontaktperson
            </label>
            <input className="form-input" id="name" type="text" required />
          </div>

          <div>
            <label className="form-label" htmlFor="phone">
              Telefon
            </label>
            <input className="form-input" id="phone" type="tel" required />
          </div>

          <div>
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input className="form-input" id="email" type="email" required />
          </div>

          <div className="md:col-span-2">
            <label className="form-label" htmlFor="message">
              Bemærkning
            </label>
            <textarea className="form-input" id="message" rows={4} />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[var(--brand-blue)] text-white font-bold rounded-md py-2 px-6 shadow hover:bg-[#0C356A] cursor-pointer"
            >
              Send &gt;
            </button>
          </div>
        </form>

        {/* Note */}
        <p className="text-sm text-[var(--brand-blue)] mt-6">
          Vi kontakter jer indenfor 1-2 hverdage
        </p>
      </div>
    </section>
  );
}
