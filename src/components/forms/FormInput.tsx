import Input from "../ui/Input";

interface FormInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
}

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = "",
  autoComplete,
  maxLength,
  minLength
}: FormInputProps) {
  return (
    <div className={className}>
      <Input
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        required={required}
        disabled={disabled}
        className={`${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
    </div>
  );
}
