import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "sky" | "outline" | "dark" | "white" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  /** Use geometric clip-path shape */
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
  sky: "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:shadow-xl",
  outline:
    "border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white active:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20",
  dark: "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 border border-slate-700 hover:shadow-lg",
  white:
    "bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 shadow-lg shadow-slate-200/50",
  ghost:
    "text-slate-600 hover:text-sky-600 hover:bg-slate-100 active:bg-slate-200",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-5 py-2 text-xs gap-1.5",
  md: "px-7 py-3 text-sm gap-2",
  lg: "px-9 py-4 text-base gap-2.5",
};

export default function Button({
  variant = "sky",
  size = "md",
  children,
  className,
  geometric = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center",
    "font-display uppercase tracking-wider font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const clipStyle = geometric
    ? { clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }
    : undefined;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} style={clipStyle} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={clipStyle} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
