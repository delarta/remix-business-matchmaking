import * as React from "react"
import { cn } from "~/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

function Container({ 
  className, 
  size = "lg",
  children,
  ...props 
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-screen-sm",    // 640px
    md: "max-w-screen-md",    // 768px  
    lg: "max-w-screen-lg",    // 1024px
    xl: "max-w-screen-xl",    // 1280px
    "2xl": "max-w-screen-2xl", // 1536px
    full: "max-w-full"
  }

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container }
