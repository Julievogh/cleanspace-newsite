export default function Testimonial({ quote, author, logo }) {
  return (
    <div className="bg-[#EAF6FB] text-center max-w-2xl mx-auto py-10 px-6 rounded">
      {/* Top line */}
      <div className="border-t-2 border-brand-blue w-36 mx-auto mb-6"></div>

      {/* Quote */}
      <p className="italic text-2xl text-brand-blue leading-relaxed mb-4">
        “ {quote} ”
      </p>

      {/* Author */}
      <p className="text-sm text-brand-blue/80">{author}</p>

      {/* Bottom line */}
      <div className="border-t-2 border-brand-blue w-36 mx-auto mt-6"></div>

      <img src={logo} alt="" className="testimonial-logo mx-auto mt-4" />
    </div>
  );
}
