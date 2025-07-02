'use client';

import SkillCard from '../ui/SkillCard';
import ExperienceCard from '../ui/ExperienceCard';
import ProjectCard from '../ui/ProjectCard';
import EducationCard from '../ui/EducationCard';
import TestimonialCard from '../ui/TestimonialCard';
import ContactCard from '../ui/ContactCard';
import FileMessage from '../ui/FileMessage';
import BlogCard from '../ui/BlogCard';
import CertificationList from '../ui/CertificationList';

export default function MessageBubble({ message }) {
  const isOutgoing = message.type === 'outgoing';
  
  const renderMessageContent = () => {
    switch (message.type) {
      case 'skill-card':
        return <SkillCard data={message.content} />;
      case 'experience-card':
        return <ExperienceCard data={message.content} />;
      case 'project-card':
        return <ProjectCard data={message.content} />;
      case 'education-card':
        return <EducationCard data={message.content} />;
      case 'testimonial-card':
        return <TestimonialCard data={message.content} />;
      case 'contact-card':
        return <ContactCard data={message.content} />;
      case 'file-message':
        return <FileMessage data={message.content} />;
      case 'blog-card':
        return <BlogCard data={message.content} />;
      case 'certification-list':
        return <CertificationList certifications={message.content} />;
      default:
        return (
          <div className="whitespace-pre-wrap">
            {message.content}
          </div>
        );
    }
  };

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} fade-in`}>
      <div
        className={`
          message-bubble max-w-[80%] md:max-w-[70%]
          ${isOutgoing 
            ? 'bg-[var(--whatsapp-message-bg)] message-outgoing text-white' 
            : 'bg-[var(--whatsapp-message-incoming)] message-incoming text-[var(--whatsapp-text-primary)]'
          }
          ${['skill-card', 'experience-card', 'project-card', 'education-card', 'testimonial-card', 'contact-card', 'blog-card', 'certification-list'].includes(message.type) 
            ? 'p-0 overflow-hidden' 
            : 'p-3'
          }
        `}
      >
        {renderMessageContent()}
        
        <div className={`
          flex items-center justify-end mt-1 space-x-1 text-xs
          ${['skill-card', 'experience-card', 'project-card', 'education-card', 'testimonial-card', 'contact-card', 'blog-card', 'certification-list'].includes(message.type) 
            ? 'px-3 pb-2' 
            : ''
          }
          ${isOutgoing ? 'text-gray-200' : 'text-[var(--whatsapp-text-secondary)]'}
        `}>
          <span>{message.timestamp}</span>
          {isOutgoing && (
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
