export async function POST() {
  return Response.json(
    { error: "Skriv til info@cleanspace.dk, eller ring på +45 60 13 34 24." },
    { status: 503 }
  );
}

// Tidligere kontakt-API med Turnstile og Resend
// import { Resend } from "resend";
// 
// const HOSTNAMES = new Set(["cleanspace.dk", "www.cleanspace.dk"]);
// const SUBJECTS = new Set([
//   "Tilbud",
//   "Erhvervsreng├©ring",
//   "Hovedreng├©ring",
//   "Vinduespolering",
//   "Trappevask",
//   "Flyttereng├©ring",
//   "Sp├©rgsm├Ñl",
//   "Job",
//   "Andet",
// ]);
// 
// const SEND_ERROR =
//   "Beskeden kunne ikke sendes. Pr├©v igen, eller skriv til info@cleanspace.dk.";
// 
// function errorResponse(error, status) {
//   return Response.json({ error }, { status });
// }
// 
// export async function POST(request) {
//   let data;
//   try {
//     data = await request.json();
//   } catch {
//     return errorResponse("Beskeden kunne ikke l├ªses.", 400);
//   }
// 
//   if (!data || typeof data !== "object" || Array.isArray(data) || data.website) {
//     return errorResponse("Indsendelsen kunne ikke godkendes.", 400);
//   }
// 
//   const limits = {
//     company: 150,
//     name: 120,
//     phone: 40,
//     email: 254,
//     subject: 50,
//     message: 3000,
//     token: 2048,
//   };
//   const fields = {};
// 
//   for (const [key, limit] of Object.entries(limits)) {
//     const value = data[key] ?? "";
//     if (typeof value !== "string" || value.length > limit) {
//       return errorResponse("Tjek, at alle felter er udfyldt korrekt.", 400);
//     }
//     fields[key] = value.trim();
//   }
// 
//   const { company, name, phone, email, subject, message, token } = fields;
// 
//   if (
//     !name ||
//     !message ||
//     !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email) ||
//     !SUBJECTS.has(subject)
//   ) {
//     return errorResponse("Tjek kontaktperson, e-mail, emne og bem├ªrkning.", 400);
//   }
// 
//   if (!token) {
//     return errorResponse("Gennemf├©r bekr├ªftelsen og pr├©v igen.", 400);
//   }
// 
//   const secret = process.env.TURNSTILE_SECRET_KEY;
//   const resendKey = process.env.RESEND_API_KEY;
//   if (!secret || !resendKey) {
//     return errorResponse(SEND_ERROR, 503);
//   }
// 
//   try {
//     const verification = await fetch(
//       "https://challenges.cloudflare.com/turnstile/v0/siteverify",
//       {
//         method: "POST",
//         body: new URLSearchParams({ secret, response: token }),
//         signal: AbortSignal.timeout(8000),
//       }
//     );
// 
//     if (!verification.ok) return errorResponse(SEND_ERROR, 503);
// 
//     const result = await verification.json();
//     if (
//       !result.success ||
//       result.action !== "contact" ||
//       !HOSTNAMES.has(result.hostname)
//     ) {
//       return errorResponse("Bekr├ªftelsen udl├©b eller blev afvist. Pr├©v igen.", 400);
//     }
// 
//     const resend = new Resend(resendKey);
//     const { error } = await resend.emails.send({
//       from: "CleanSpace Website <info@cleanspace.dk>",
//       to: "info@cleanspace.dk",
//       replyTo: email,
//       subject: `Ny henvendelse fra cleanspace.dk ÔÇô ${subject}`,
//       text: [
//         `Firma: ${company || "-"}`,
//         `Kontaktperson: ${name}`,
//         `Telefon: ${phone || "-"}`,
//         `E-mail: ${email}`,
//         `Emne: ${subject}`,
//         "",
//         "Bem├ªrkning:",
//         message,
//       ].join("\n"),
//     });
// 
//     if (error) return errorResponse(SEND_ERROR, 502);
// 
//     return Response.json({ success: true });
//   } catch {
//     return errorResponse(SEND_ERROR, 503);
//   }
// }
