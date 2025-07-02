'use client';

import Image from 'next/image';

export default function ProjectCard({ data }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500';
      case 'In Development':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] rounded-lg border border-[var(--whatsapp-border)] overflow-hidden">
      {/* Project Image */}
      <div className="relative h-40 bg-[var(--whatsapp-background)]">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl">🚀</div>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`
            px-2 py-1 text-xs font-medium text-white rounded-full
            ${getStatusColor(data.status)}
          `}>
            {data.status}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg mb-2">
          {data.title}
        </h3>
        
        <p className="text-[var(--whatsapp-text-secondary)] mb-4 leading-relaxed">
          {data.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2 text-sm">
            🛠️ Built with:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[var(--whatsapp-background)] text-[var(--whatsapp-text-primary)] text-xs rounded-full border border-[var(--whatsapp-border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2 text-sm">
            ✨ Key Features:
          </h4>
          <ul className="space-y-1">
            {data.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-[var(--whatsapp-text-secondary)] text-sm flex items-start">
                <span className="text-[var(--whatsapp-primary)] mr-2">•</span>
                {feature}
              </li>
            ))}
            {data.features.length > 3 && (
              <li className="text-[var(--whatsapp-text-tertiary)] text-sm">
                +{data.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {data.liveUrl && (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary-dark)] text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
            >
              🌐 Live Demo
            </a>
          )}
          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--whatsapp-background)] hover:bg-[var(--whatsapp-hover)] text-[var(--whatsapp-text-primary)] text-center py-2 px-4 rounded-lg border border-[var(--whatsapp-border)] transition-colors text-sm font-medium"
            >
              📝 Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
