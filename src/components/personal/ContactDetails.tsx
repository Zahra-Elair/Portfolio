import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { ContactInfo } from './types';

export default function ContactDetails({ contact }: { contact: ContactInfo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <ContactItem icon={<Mail />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
      <ContactItem icon={<Phone />} label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
      <ContactItem icon={<MapPin />} label="Location" value={contact.location} />
      <ContactItem 
        icon={<Linkedin />} 
        label="LinkedIn" 
        value="View Profile"
        href={contact.linkedin}
      />
    </div>
  );
}

function ContactItem({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <div>
        <dt className="text-sm text-gray-500 dark:text-gray-400">{label}</dt>
        <dd className="text-gray-900 dark:text-white">{value}</dd>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}