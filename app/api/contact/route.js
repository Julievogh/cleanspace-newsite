import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();

  // Honeypot anti-spam
  if (data.website) {
    return new Response(JSON.stringify({ error: "Spam detected" }), {
      status: 400,
    });
  }

  // Tjek required felter
  if (!data.name || !data.email || !data.message) {
    return new Response(JSON.stringify({ error: "Udfyld alle felter" }), {
      status: 400,
    });
  }

  try {
    // Send email via Resend
    const email = await resend.emails.send({
      from: "CleanSpace Website <info@cleanspace.dk>", // skal matche dit domæne på Resend
      to: "info@cleanspace.dk",
      subject: `Ny besked fra ${data.name}`,
      html: `
        <p><strong>Firma:</strong> ${data.company || "-"}</p>
        <p><strong>Kontaktperson:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone || "-"}</p>
        <p><strong>Henvendelse drejer sig om:</strong> ${data.subject}</p>
        <p><strong>Bemærkning:</strong><br/>${data.message}</p>
      `,
    });

    console.log("Resend email response:", email);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Fejl i email-sending:", err);
    return new Response(JSON.stringify({ error: "Noget gik galt" }), {
      status: 500,
    });
  }
}
