"use client";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      company: e.target.company.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      website: e.target.website.value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Tak! Vi har modtaget din besked. ");
        e.target.reset();
      } else {
        setStatus(result.error || "Noget gik galt, prøv igen.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Noget gik galt, prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#E5F6FB] py-12 px-4">
      <div className="w-full max-w-3xl bg-[#E5F6FB] border border-[#0a265633] rounded-lg p-8 text-center mx-auto">
        <img
          src="/icons/logo-stempel-stor.png"
          alt="CleanSpace logo"
          className="mx-auto mb-4 w-32 h-auto"
        />
        <h2 className="text-2xl font-bold text-[var(--brand-blue)] mb-1">
          Få et tilbud på rengøring
        </h2>
        <p className="text-[var(--brand-yellow)] font-bold mb-6">
          Gratis og uforpligtende
        </p>
        <p className="text-xl mb-6">
          Kontakt os gerne direkte, eller udfyld formularen nedenfor.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            variant="primary"
            as="a"
            href="tel:+4523848088"
            className="rounded-2xl px-6 py-3 shadow-lg"
          >
            +45 23 84 80 88
          </Button>
          <Button
            variant="third"
            as="a"
            href="mailto:info@cleanspace.dk"
            className="rounded-2xl px-6 py-3 shadow-lg"
          >
            info@cleanspace.dk
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          {/* Honeypot */}
          <input type="text" name="website" style={{ display: "none" }} />

          <div>
            <label className="form-label" htmlFor="company">
              Firma
            </label>
            <input
              className="form-input"
              id="company"
              name="company"
              type="text"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="name">
              Kontaktperson
            </label>
            <input
              className="form-input"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="phone">
              Telefon
            </label>
            <input
              className="form-input"
              id="phone"
              name="phone"
              type="tel"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="form-label" htmlFor="subject">
              Hvad drejer henvendelsen sig om?
            </label>

            <select
              id="subject"
              name="subject"
              className="form-input"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Vælg en mulighed
              </option>
              <option value="Tilbud">Bestil et gratis tilbud</option>
              <option value="Erhvervsrengøring">Erhvervsrengøring</option>
              <option value="Hovedrengøring">Hovedrengøring</option>
              <option value="Vinduespolering">Vinduespolering</option>
              <option value="Trappevask">Trappevask</option>
              <option value="Flytterengøring">Flytterengøring</option>
              <option value="Klage">Klage</option>
              <option value="Spørgsmål">Spørgsmål</option>
              <option value="Job">Job</option>
              <option value="Andet">Andet</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="form-label" htmlFor="message">
              Bemærkning
            </label>
            <textarea
              className="form-input"
              id="message"
              name="message"
              rows={4}
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[var(--brand-blue)] text-white font-bold rounded-md py-2 px-6 shadow hover:bg-[#0C356A] cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sender..." : "Send >"}
            </button>
          </div>
        </form>

        {status && (
          <p className="text-sm text-[var(--brand-blue)] font-bold mt-6">
            {status}
          </p>
        )}
        <p className="text-sm text-[var(--brand-blue)] mt-2">
          Vi kontakter jer indenfor 1-2 hverdage
        </p>
      </div>
    </section>
  );
}
