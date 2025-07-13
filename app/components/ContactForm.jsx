export default function ContactForm() {
  return (
    <section
      className="section bg-white max-w-xl mx-auto rounded-2xl shadow-lg"
      id="contact"
    >
      <h2 className="h2 section-title">
        Få et tilbud på rengøring <br />
        <span className="highlight-yellow">Gratis og uforpligtende</span>
      </h2>
      <form>
        <label className="form-label" htmlFor="company">
          Firma
        </label>
        <input className="form-input" id="company" type="text" required />

        <label className="form-label" htmlFor="name">
          Kontaktperson
        </label>
        <input className="form-input" id="name" type="text" required />

        <label className="form-label" htmlFor="phone">
          Telefon
        </label>
        <input className="form-input" id="phone" type="tel" required />

        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-input" id="email" type="email" required />

        <label className="form-label" htmlFor="message">
          Besked/rengøring
        </label>
        <textarea className="form-input" id="message" rows={4} />

        <button className="btn-primary form-button">Send</button>
      </form>
    </section>
  );
}
