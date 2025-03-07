import React from 'react';
import { useInView } from './useInView';
import { cn } from '../../utils/cn';

interface AnimatedElementProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-up';
}

export default function AnimatedElement({
  as: Component = 'div',
  children,
  className,
  delay = 0,
  duration = 600,
  animation = 'fade-up',
}: AnimatedElementProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const animations = {
    'fade-up': 'opacity-0 translate-y-4 scale-100',
    'fade-in': 'opacity-0 scale-100',
    'scale-up': 'opacity-0 scale-95',
  };

  const activeAnimations = {
    'fade-up': 'opacity-100 translate-y-0 scale-105',
    'fade-in': 'opacity-100 scale-100',
    'scale-up': 'opacity-100 scale-100',
  };

  return (
    <Component
      ref={ref}
      className={cn(
        animations[animation],
        'transform transition-all ease-out will-change-transform',
        isInView && activeAnimations[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}