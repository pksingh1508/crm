import CustomSelect from "@/components/ui/CustomSelect";

interface FormSelectProps {
  name: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function FormSelect({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = ""
}: FormSelectProps) {
  return (
    <div className={className}>
      <CustomSelect
        label={label}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        error={error}
        required={required}
        disabled={disabled}
        className={`${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
    </div>
  );
}
