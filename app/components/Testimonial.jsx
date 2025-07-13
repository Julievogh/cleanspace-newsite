export default function Testimonial({ quote, author, logo }) {
  return (
    <div className="card text-center max-w-lg mx-auto">
      {logo && <img src={logo} alt="" className="testimonial-logo" />}
      <div className="testimonial-quote mb-2">“{quote}”</div>
      <div className="testimonial-author">{author}</div>
    </div>
  );
}
