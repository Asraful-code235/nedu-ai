import { cn } from "@/lib/utils";

const variants = {
  unstyled: "p-0 rounded-0 text-base",
  primary: "bg-[#FF980E] text-white",
  secondary: "bg-gray-200",
  warning: "bg-[#fffd82] border border-black px-6 py-2 md:text-sm",
  light: "border border-black",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "px-8 py-4 rounded-[32px] text-sm md:text-xl font-semibold leading-5 tracking-[0.8px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
