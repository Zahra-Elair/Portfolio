import React from 'react';
import AnimatedHeading from '../animations/AnimatedHeading';

export default function ProfileSummary({ summary }: { summary: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <AnimatedHeading
        level={3}
        className="text-gray-900 dark:text-white mb-3"
        delay={300}
      >
        Professional Summary
      </AnimatedHeading>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {summary}
      </p>
    </div>
  );
}