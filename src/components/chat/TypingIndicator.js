'use client';

export default function TypingIndicator() {
  return (
    <div className="flex justify-start fade-in">
      <div className="bg-[var(--whatsapp-message-incoming)] message-bubble message-incoming max-w-[70%] p-3">
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-[var(--whatsapp-text-secondary)] rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-[var(--whatsapp-text-secondary)] rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-[var(--whatsapp-text-secondary)] rounded-full typing-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
