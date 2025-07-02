'use client';

import { useState } from 'react';

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] px-4 py-3 border-t border-[var(--whatsapp-border)]">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        {/* Attachment Button */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors flex-shrink-0"
        >
          <svg className="w-6 h-6 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Message Input */}
        <div className="flex-1 bg-[var(--whatsapp-background)] rounded-3xl border border-[var(--whatsapp-border)] focus-within:border-[var(--whatsapp-primary)] transition-colors">
          <div className="flex items-end">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-[var(--whatsapp-text-primary)] placeholder-[var(--whatsapp-text-secondary)] px-4 py-3 resize-none focus:outline-none min-h-[20px] max-h-[120px]"
              rows="1"
              style={{ 
                height: 'auto',
                minHeight: '20px'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            
            {/* Emoji Button */}
            <button
              type="button"
              className="p-2 hover:bg-[var(--whatsapp-hover)] rounded-full transition-colors flex-shrink-0 mr-2"
            >
              <svg className="w-6 h-6 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Send/Voice Button */}
        {message.trim() ? (
          <button
            type="submit"
            className="p-3 bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary-dark)] rounded-full transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="p-3 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}
