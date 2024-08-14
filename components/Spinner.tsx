import { cn } from "@/utils/util";

type SpinnerProps = {
  className?: string;
};

export default function Spinner(props: SpinnerProps) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full animate-spin border-2 border-blue-500 border-t-transparent",
        props.className
      )}
    ></div>
  );
}
