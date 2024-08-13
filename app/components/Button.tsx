import { PropsWithChildren } from "react";
import { cn } from "@/utils/util";
interface ButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button = ({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-[background]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
