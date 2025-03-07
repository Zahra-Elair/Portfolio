import React from 'react';
import ContactDetails from './ContactDetails';
import ProfileSummary from './ProfileSummary';
import AnimatedHeading from '../animations/AnimatedHeading';
import { personalInfo } from './data';

export default function PersonalInfo() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <AnimatedHeading
            level={1}
            className="text-gray-900 dark:text-white mb-2"
          >
            {personalInfo.name}
          </AnimatedHeading>
          <AnimatedHeading
            level={2}
            className="text-xl text-blue-600 dark:text-blue-400"
            delay={200}
          >
            {personalInfo.title}
          </AnimatedHeading>
        </div>
        <ContactDetails contact={personalInfo.contact} />
        <ProfileSummary summary={personalInfo.summary} />
      </div>
    </section>
  );
}