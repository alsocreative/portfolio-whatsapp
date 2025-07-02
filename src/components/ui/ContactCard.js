'use client';

export default function ContactCard({ data }) {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      color: 'text-blue-400'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`,
      color: 'text-green-400'
    },
    {
      icon: '📍',
      label: 'Location',
      value: data.location,
      href: null,
      color: 'text-red-400'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: data.linkedin,
      color: 'text-blue-600'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'View my code',
      href: data.github,
      color: 'text-gray-400'
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: 'Follow me',
      href: data.twitter,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <div className="mb-4">
        <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg mb-2">
          📞 Let&apos;s Connect!
        </h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[var(--whatsapp-primary)] rounded-full"></div>
          <span className="text-[var(--whatsapp-primary)] font-medium">
            {data.availability}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--whatsapp-background)] rounded-full flex items-center justify-center border border-[var(--whatsapp-border)]">
              <span className="text-lg">{method.icon}</span>
            </div>
            
            <div className="flex-1">
              <p className="text-[var(--whatsapp-text-secondary)] text-sm">
                {method.label}
              </p>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${method.color} hover:underline transition-colors`}
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-[var(--whatsapp-text-primary)]">
                  {method.value}
                </p>
              )}
            </div>

            {method.href && (
              <div className="text-[var(--whatsapp-text-tertiary)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[var(--whatsapp-border)]">
        <p className="text-[var(--whatsapp-text-secondary)] text-sm text-center">
          💬 I typically respond within 24 hours
        </p>
      </div>
    </div>
  );
}
