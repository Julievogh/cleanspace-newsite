export default function Button({
  variant = "primary", // "primary" | "secondary" | more if you want
  children,
  className = "",
  type = "button",
  ...props
}) {
  let base = "inline-block font-bold transition focus:outline-none";
  let style = "";

  // Add more variants as needed!
  if (variant === "primary") {
    style = "btn-primary";
  } else if (variant === "secondary") {
    style = "btn-secondary";
  } else if (variant === "outline") {
    style =
      "border-2 border-brand-blue text-brand-blue bg-transparent rounded-xl px-6 py-3 hover:bg-brand-blue hover:text-white";
  } // add more variants here if you want!

  return (
    <button type={type} className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
