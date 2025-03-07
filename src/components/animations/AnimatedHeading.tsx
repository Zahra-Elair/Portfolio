import React from 'react';
import AnimatedElement from './AnimatedElement';

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
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
    3: 'text-2xl font-medium',
  };

  return (
    <AnimatedElement
      as={`h${level}` as keyof JSX.IntrinsicElements}
      className={`${baseStyles[level]} ${className || ''}`}
      delay={delay}
      animation="scale-up"
    >
      {children}
    </AnimatedElement>
  );
}