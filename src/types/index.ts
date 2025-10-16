// Component props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
}

// Authentication types
export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthError {
  message: string;
  status?: number;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  signIn: (
    credentials: LoginCredentials
  ) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

export interface FormDataTypes {
  id?: string;
  user_id?: string;
  invoice_number: string;
  buyer_name: string;
  buyer_address: string;
  passport_no?: string;
  date_of_issue: string;
  due_date: string;
  services: {
    name: string;
    quantity: number;
    unit: string;
    price: number;
    vatRate: number;
  }[];
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "default";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

// Contact types
export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  iam: string;
  description: string;
  is_mailed: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ContactsResponse {
  data: Contact[] | null;
  error: string | null;
  count?: number;
}
