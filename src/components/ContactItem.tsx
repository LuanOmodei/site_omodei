import { FC, ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  href: string;
  text: string;
  external?: boolean;
}

const ContactItem: FC<ContactItemProps> = ({ icon, href, text, external = false }) => {
  return (
    <a 
      href={href} 
      className="contact-link flex items-center mb-4 text-text-primary hover:text-primary transition-colors"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="contact-icon">
        {icon}
      </div>
      <span>{text}</span>
    </a>
  );
};

export default ContactItem;