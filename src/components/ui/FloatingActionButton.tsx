import Link from 'next/link';

interface FloatingActionButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function FloatingActionButton({
  href,
  onClick,
  children,
  className = '',
}: FloatingActionButtonProps) {
  const baseStyles = `
    fixed bottom-6 right-6 z-50
    flex items-center justify-center
    w-14 h-14 
    bg-blue-600 hover:bg-blue-700 
    text-white font-medium
    rounded-full shadow-lg hover:shadow-xl
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-blue-300
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}