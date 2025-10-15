import { CardProps } from "../../types/index";

export default function Card({
  children,
  className = "",
  padding = "md",
  shadow = "md"
}: CardProps) {
  const baseStyles = "bg-white rounded-lg border border-gray-200";

  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  };

  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  };

  const combinedStyles = `${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${className}`;

  return <div className={combinedStyles}>{children}</div>;
}
