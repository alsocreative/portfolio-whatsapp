'use client';

export default function ContactList({ contacts, selectedContact, onContactSelect }) {
  const getCategoryColor = (category) => {
    const colors = {
      personal: 'bg-blue-500',
      technical: 'bg-purple-500',
      professional: 'bg-green-500',
      projects: 'bg-orange-500',
      academic: 'bg-indigo-500',
      social: 'bg-yellow-500',
      contact: 'bg-red-500',
      content: 'bg-pink-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const formatTime = (time) => {
    if (time === 'now') return 'now';
    return time;
  };

  return (
    <div className="divide-y divide-[var(--whatsapp-border)]">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => onContactSelect(contact.id)}
          className={`
            flex items-center px-4 py-3 cursor-pointer transition-all duration-200
            hover:bg-[var(--whatsapp-hover)]
            ${selectedContact === contact.id ? 'bg-[var(--whatsapp-hover)]' : ''}
          `}
        >
          <div className="relative flex-shrink-0">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-[var(--whatsapp-background)] border border-[var(--whatsapp-border)]">
              {contact.avatar}
            </div>
            
            {/* Online indicator */}
            {contact.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--whatsapp-primary)] border-2 border-[var(--whatsapp-panel-bg)] rounded-full"></div>
            )}
            
            {/* Category indicator */}
            <div className={`absolute -top-1 -right-1 w-4 h-4 ${getCategoryColor(contact.category)} rounded-full border-2 border-[var(--whatsapp-panel-bg)]`}></div>
          </div>

          <div className="flex-1 ml-3 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-[var(--whatsapp-text-primary)] font-medium text-base truncate">
                {contact.name}
              </h3>
              <div className="flex items-center space-x-1">
                <span className="text-[var(--whatsapp-text-secondary)] text-xs">
                  {formatTime(contact.time)}
                </span>
                {contact.unread > 0 && (
                  <div className="bg-[var(--whatsapp-primary)] text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {contact.unread}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-1">
              <p className="text-[var(--whatsapp-text-secondary)] text-sm truncate">
                {contact.lastMessage}
              </p>
              
              {/* Message status icons */}
              <div className="flex items-center space-x-1 ml-2">
                {contact.id === selectedContact && (
                  <svg className="w-4 h-4 text-[var(--whatsapp-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {contacts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-[var(--whatsapp-text-secondary)] text-center">
            No sections found
          </p>
          <p className="text-[var(--whatsapp-text-tertiary)] text-sm text-center mt-2">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
}
