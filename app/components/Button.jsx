export default function Button({
  as: Component = "button", // 👈 default er <button>
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}) {
  let base = "inline-block font-bold transition focus:outline-none";
  let style = "";

  if (variant === "primary") {
    style = "btn-primary";
  } else if (variant === "secondary") {
    style = "btn-secondary";
  } else if (variant === "third") {
    style = "btn-third";
  } else if (variant === "outline") {
    style =
      "border-2 border-brand-blue text-brand-blue bg-transparent rounded-xl px-6 py-3 hover:bg-brand-blue hover:text-white";
  }

  return (
    <Component
      type={Component === "button" ? type : undefined} // kun hvis det er <button>
      className={`${base} ${style} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
