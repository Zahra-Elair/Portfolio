import React from "react";
import AnimatedElement from "./AnimatedElement";

interface AnimatedHeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedHeading({
  level,
  children,
  className,
  delay,
}: AnimatedHeadingProps) {
  const baseStyles = {
    1: "text-4xl font-bold text-gray-900 dark:text-white",
    2: "text-3xl font-semibold text-gray-900 dark:text-white",
    3: "text-2xl font-medium text-gray-900 dark:text-white",
  };
  const headingTags = {
    1: "h1",
    2: "h2",
    3: "h3",
  } as const;
  const asTag = headingTags[level];

  return (
    <AnimatedElement
      as={asTag}
      className={`${baseStyles[level]} ${className || ""}`}
      delay={delay}
      animation="scale-up"
    >
      {children}
    </AnimatedElement>
  );
}
