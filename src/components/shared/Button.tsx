import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "sky" | "outline" | "dark" | "white" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  /** Kept for API compatibility; no-op in editorial theme */
  geometric?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  sky: "bg-paint-ink text-paint-bone hover:bg-paint-navy",
  outline:
    "border border-paint-ink/25 text-paint-ink hover:border-paint-ink hover:bg-paint-ink hover:text-paint-bone",
  dark: "bg-paint-ink text-paint-bone hover:bg-paint-charcoal",
  white:
    "bg-paint-bone text-paint-ink hover:bg-paint-cloud",
  ghost:
    "text-paint-ink/80 hover:text-paint-ink hover:bg-paint-cloud",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-7 py-3.5 text-sm gap-2.5",
};

export default function Button({
  variant = "sky",
  size = "md",
  children,
  className,
  geometric: _geometric = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center",
    "font-body font-medium tracking-normal rounded-full",
    "transition-all duration-400 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paint-ink",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
