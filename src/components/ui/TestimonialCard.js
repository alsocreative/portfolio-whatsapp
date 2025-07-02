'use client';

import Image from 'next/image';

export default function TestimonialCard({ data }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-[var(--whatsapp-text-tertiary)]'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      {/* Quote */}
      <div className="mb-4">
        <div className="text-[var(--whatsapp-primary)] text-4xl mb-2">"</div>
        <p className="text-[var(--whatsapp-text-primary)] leading-relaxed italic">
          {data.text}
        </p>
        <div className="text-[var(--whatsapp-primary)] text-4xl text-right -mt-6">"</div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(data.rating)}
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-[var(--whatsapp-background)] border border-[var(--whatsapp-border)] overflow-hidden">
          {data.avatar ? (
            <Image
              src={data.avatar}
              alt={data.author}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--whatsapp-text-primary)] font-semibold">
              {data.author.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div>
          <h4 className="text-[var(--whatsapp-text-primary)] font-semibold">
            {data.author}
          </h4>
          <p className="text-[var(--whatsapp-text-secondary)] text-sm">
            {data.position}
          </p>
          <p className="text-[var(--whatsapp-text-tertiary)] text-sm">
            {data.company}
          </p>
        </div>
      </div>
    </div>
  );
}
