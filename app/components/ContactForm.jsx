export default function ContactForm() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#E5F6FB] px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-lg border border-[#0a265633] p-8 text-center text-brand-blue">
        <h2 className="text-2xl font-bold">
          Få et tilbud på erhvervsrengøring
        </h2>

        <p className="mt-3">
          Fortæl os, hvad du har brug for, så giver vi dig et uforpligtende tilbud.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+4560133424"
            className="rounded-md bg-brand-blue px-5 py-3 font-bold text-white"
          >
            Ring på +45 60 13 34 24
          </a>

          <a
            href="mailto:info@cleanspace.dk?subject=Tilbud%20p%C3%A5%20erhvervsreng%C3%B8ring"
            className="rounded-md border border-brand-blue px-5 py-3 font-bold"
          >
            Skriv til info@cleanspace.dk
          </a>
        </div>
      </div>
    </section>
  );
}

// Tidligere kontaktformular med Turnstile
// "use client";
// 
// import Script from "next/script";
// import { useEffect, useRef, useState } from "react";
// 
// const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
// 
// const subjects = [
//   ["Tilbud", "Bestil et gratis tilbud"],
//   ["Erhvervsreng├©ring", "Erhvervsreng├©ring"],
//   ["Hovedreng├©ring", "Hovedreng├©ring"],
//   ["Vinduespolering", "Vinduespolering"],
//   ["Trappevask", "Trappevask"],
//   ["Flyttereng├©ring", "Flyttereng├©ring"],
//   ["Sp├©rgsm├Ñl", "Sp├©rgsm├Ñl"],
//   ["Job", "Job"],
//   ["Andet", "Andet"],
// ];
// 
// export default function ContactForm() {
//   const widgetContainer = useRef(null);
//   const widgetId = useRef(null);
//   const [scriptReady, setScriptReady] = useState(false);
//   const [token, setToken] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [widgetError, setWidgetError] = useState(false);
// 
//   useEffect(() => {
//     if (!scriptReady || !SITE_KEY || !widgetContainer.current) return;
// 
//     const turnstile = window.turnstile;
//     widgetId.current = turnstile.render(widgetContainer.current, {
//       sitekey: SITE_KEY,
//       action: "contact",
//       callback: (newToken) => {
//         setToken(newToken);
//         setWidgetError(false);
//       },
//       "expired-callback": () => setToken(""),
//       "error-callback": () => {
//         setToken("");
//         setWidgetError(true);
//       },
//     });
// 
//     return () => {
//       turnstile.remove(widgetId.current);
//       widgetId.current = null;
//     };
//   }, [scriptReady]);
// 
//   async function handleSubmit(event) {
//     event.preventDefault();
//     if (loading || !token) return;
// 
//     const form = event.currentTarget;
//     const fields = Object.fromEntries(new FormData(form));
//     delete fields["cf-turnstile-response"];
// 
//     setLoading(true);
//     setStatus("");
// 
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...fields, token }),
//       });
// 
//       const result = await response.json();
//       if (!response.ok) {
//         setStatus(result.error || "Beskeden kunne ikke sendes. Pr├©v igen.");
//         return;
//       }
// 
//       form.reset();
//       setStatus("Tak for din besked. Vi kontakter dig inden for 1ÔÇô2 hverdage.");
//     } catch {
//       setStatus("Beskeden kunne ikke sendes. Pr├©v igen, eller kontakt os direkte.");
//     } finally {
//       setToken("");
//       if (widgetId.current !== null) window.turnstile.reset(widgetId.current);
//       setLoading(false);
//     }
//   }
// 
//   return (
//     <section id="contact" className="bg-[#E5F6FB] px-4 py-12">
//       {SITE_KEY && (
//         <Script
//           src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
//           strategy="afterInteractive"
//           onReady={() => setScriptReady(true)}
//           onError={() => setWidgetError(true)}
//         />
//       )}
// 
//       <div className="mx-auto w-full max-w-3xl rounded-lg border border-[#0a265633] p-8">
//         <h2 className="mb-4 text-center text-2xl font-bold text-[var(--brand-blue)]">
//           F├Ñ et tilbud p├Ñ erhvervsreng├©ring
//         </h2>
// 
//         <form onSubmit={handleSubmit} aria-busy={loading}>
//           <fieldset
//             disabled={loading}
//             className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2"
//           >
//             <input type="hidden" name="website" defaultValue="" />
// 
//             <div>
//               <label htmlFor="company">Firma</label>
//               <input id="company" name="company" className="form-input"
//                 autoComplete="organization" maxLength={150} />
//             </div>
// 
//             <div>
//               <label htmlFor="name">Kontaktperson</label>
//               <input id="name" name="name" className="form-input"
//                 autoComplete="name" maxLength={120} required />
//             </div>
// 
//             <div>
//               <label htmlFor="phone">Telefon</label>
//               <input id="phone" name="phone" type="tel" className="form-input"
//                 autoComplete="tel" maxLength={40} />
//             </div>
// 
//             <div>
//               <label htmlFor="email">E-mail</label>
//               <input id="email" name="email" type="email" className="form-input"
//                 autoComplete="email" maxLength={254} required />
//             </div>
// 
//             <div className="md:col-span-2">
//               <label htmlFor="subject">Hvad drejer henvendelsen sig om?</label>
//               <select id="subject" name="subject" className="form-input"
//                 defaultValue="" required>
//                 <option value="" disabled>V├ªlg en mulighed</option>
//                 {subjects.map(([value, label]) => (
//                   <option key={value} value={value}>{label}</option>
//                 ))}
//               </select>
//             </div>
// 
//             <div className="md:col-span-2">
//               <label htmlFor="message">Bem├ªrkning</label>
//               <textarea id="message" name="message" rows={4}
//                 className="form-input" maxLength={3000} required />
//             </div>
// 
//             <div className="md:col-span-2">
//               <div ref={widgetContainer} />
//               {(!SITE_KEY || widgetError) && (
//                 <p role="status" className="mt-2 text-sm">
//                   Bekr├ªftelsen kunne ikke indl├ªses. Genindl├ªs siden, eller skriv til{" "}
//                   <a className="underline" href="mailto:info@cleanspace.dk">
//                     info@cleanspace.dk
//                   </a>.
//                 </p>
//               )}
//             </div>
// 
//             <div className="text-center md:col-span-2">
//               <button
//                 type="submit"
//                 disabled={loading || !token}
//                 className="rounded-md bg-[var(--brand-blue)] px-6 py-2 font-bold text-white shadow hover:bg-[#0C356A] disabled:opacity-50"
//               >
//                 {loading ? "SenderÔÇª" : "Send besked"}
//               </button>
//             </div>
//           </fieldset>
//         </form>
// 
//         <p className="mt-4 text-center text-sm" role="status">{status}</p>
//       </div>
//     </section>
//   );
// }
