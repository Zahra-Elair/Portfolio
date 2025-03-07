import React from 'react';
import { useInView } from './useInView';
import { cn } from '../../utils/cn';

interface AnimatedTitleProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedTitle({
  as: Component = 'h2',
  children,
  className,
  delay = 0,
}: AnimatedTitleProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <Component
      ref={ref}
      className={cn(
        'opacity-0 translate-y-4 transition-all duration-700 ease-out',
        isInView && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}