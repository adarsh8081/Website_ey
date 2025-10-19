import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <img 
        src="/src/assets/icon.svg" 
        alt="Praedo AI" 
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={cn("font-bold text-foreground", textSizeClasses[size])}>
          Praedo AI
        </span>
      )}
    </div>
  );
}
