'use client';

export default function BlogCard({ data }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg mb-2">
            {data.title}
          </h3>
          <p className="text-[var(--whatsapp-text-secondary)] leading-relaxed mb-3">
            {data.excerpt}
          </p>
        </div>
        <div className="text-2xl ml-3">📝</div>
      </div>

      <div className="flex items-center justify-between text-sm text-[var(--whatsapp-text-secondary)] mb-3">
        <span>📅 {formatDate(data.publishDate)}</span>
        <span>⏱️ {data.readTime}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {data.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-[var(--whatsapp-background)] text-[var(--whatsapp-text-primary)] text-xs rounded-full border border-[var(--whatsapp-border)]"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary-dark)] text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
      >
        📖 Read Article
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
