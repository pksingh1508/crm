import { ButtonProps } from "@/types";
import Button from "../ui/button";

interface FormButtonProps extends ButtonProps {
  fullWidth?: boolean;
}

export default function FormButton({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  className = "",
  fullWidth = false
}: FormButtonProps) {
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      type={type}
      onClick={onClick}
      className={`${widthClass} ${className}`}
    >
      {children}
    </Button>
  );
}
