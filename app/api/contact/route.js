import nodemailer from "nodemailer";

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

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // send.one.com
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"CleanSpace Website" <${process.env.SMTP_USER}>`, // afsender skal være One.com adresse
      to: process.env.SMTP_USER, // modtager
      replyTo: data.email, // svar går til brugeren
      subject: `Ny besked fra ${data.name}`,
      html: `
        <p><strong>Firma:</strong> ${data.company || "-"}</p>
        <p><strong>Kontaktperson:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone || "-"}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Henvendelse drejer sig om:</strong> ${data.subject}</p>
        <p><strong>Bemærkning:</strong><br/>${data.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Noget gik galt" }), {
      status: 500,
    });
  }
}
