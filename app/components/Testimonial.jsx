import Image from "next/image";

export default function Testimonial({ quote, author, logo, logoAlt }) {
  return (
    <div className="bg-[#EAF6FB] text-center max-w-2xl mx-auto py-10 px-6 rounded">
      {/* Top line */}
      <div className="border-t-2 border-brand-blue w-36 mx-auto mb-6"></div>

      {/* Quote */}
      <blockquote className="italic text-2xl text-brand-blue leading-relaxed mb-4">
        “ {quote} ”
      </blockquote>

      {/* Author */}
      <p className="text-sm text-brand-blue/80">{author}</p>

      {/* Bottom line */}
      <div className="border-t-2 border-brand-blue w-36 mx-auto mt-6"></div>

      {/* Logo */}
      <div className="testimonial-logo mx-auto mt-4 relative w-32 h-16">
        <Image
          src={logo}
          alt={logoAlt || "Kunde-logo"}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
