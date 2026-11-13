export default function ContactForm() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#E5F6FB] px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#C1DCE7] bg-white px-6 py-9 text-center text-[#0A2656] shadow-sm sm:px-10 sm:py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Få et tilbud på erhvervsrengøring
        </h2>

        <p className="mx-auto mt-3 max-w-md leading-relaxed">
          Fortæl os, hvad du har brug for, så giver vi dig et uforpligtende tilbud.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:+4560133424"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FFD600] px-5 py-3 font-bold text-[#0A2656] hover:bg-[#FFE34D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A2656]"
          >
            Ring på +45 60 13 34 24
          </a>

          <a
            href="mailto:info@cleanspace.dk?subject=Tilbud%20p%C3%A5%20erhvervsreng%C3%B8ring"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0A2656] px-5 py-3 font-bold text-[#0A2656] hover:bg-[#E5F6FB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A2656]"
          >
            Skriv til info@cleanspace.dk
          </a>
        </div>
      </div>
    </section>
  );
}