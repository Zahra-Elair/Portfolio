import React from "react";
import { useInView } from "./useInView";
import { cn } from "../../utils/cn";

interface AnimatedElementProps<T extends keyof HTMLElementTagNameMap = "div"> {
  // Limit to HTML elements to keep ref typing compatible with HTMLElement
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-up" | "fade-in";
}

export default function AnimatedElement<
  T extends keyof HTMLElementTagNameMap = "div"
>({
  as: Component = "div" as T,
  children,
  className,
  delay = 0,
  duration = 500,
  animation = "fade-up",
}: AnimatedElementProps<T>) {
  const { ref, isInView } = useInView<HTMLElementTagNameMap[T]>({
    threshold: 0.1,
  });

  const animations = {
    "fade-up": "opacity-0 translate-y-3",
    "fade-in": "opacity-0",
  } as const;

  const activeAnimations = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
  } as const;

  const Comp = Component as unknown as React.ElementType;

  return (
    <Comp
      ref={ref as unknown as React.Ref<unknown>}
      className={cn(
        "transition ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        isInView ? activeAnimations[animation] : animations[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Comp>
  );
}
