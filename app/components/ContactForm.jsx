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

      const resultText = await res.text();
      console.log("Server response:", resultText);

      let result;
      try {
        result = JSON.parse(resultText);
      } catch (err) {
        console.error("Kunne ikke parse JSON:", err);
        result = { error: "Server returnerede ikke JSON" };
      }

      if (res.ok) {
        setStatus(
          "Tak for din besked - vi kontakter dig indenfor 1-2 hverdage."
        );
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
        <h2 className="text-2xl font-bold text-[var(--brand-blue)] mb-1">
          Få et tilbud på rengøring
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <input type="text" name="website" style={{ display: "none" }} />

          <div>
            <label htmlFor="company">Firma</label>
            <input
              id="company"
              name="company"
              type="text"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="name">Kontaktperson</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="phone">Telefon</label>
            <input id="phone" name="phone" type="tel" className="form-input" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject">Hvad drejer henvendelsen sig om?</label>
            <select
              id="subject"
              name="subject"
              required
              className="form-input"
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
              <option value="Spørgsmål">Spørgsmål</option>
              <option value="Job">Job</option>
              <option value="Andet">Andet</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message">Bemærkning</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="form-input"
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
          <p className="text-sm mt-6 font-bold text-[var(--brand-blue)]">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
