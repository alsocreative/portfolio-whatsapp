'use client';

import { useState, useEffect } from 'react';

export default function ChatHeader({ contact, onToggleSidebar, isMobile, sidebarOpen }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--whatsapp-panel-bg)] px-4 py-3 border-b border-[var(--whatsapp-border)] flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {/* Menu/Back button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors"
        >
          {isMobile ? (
            <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Contact Avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-[var(--whatsapp-background)] border border-[var(--whatsapp-border)]">
            {contact.avatar}
          </div>
          {contact.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--whatsapp-primary)] border-2 border-[var(--whatsapp-panel-bg)] rounded-full"></div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-[var(--whatsapp-text-primary)] font-medium text-lg truncate">
            {contact.name}
          </h2>
          <div className="flex items-center space-x-2">
            {contact.isOnline && (
              <>
                <div className="w-2 h-2 bg-[var(--whatsapp-primary)] rounded-full"></div>
                <span className="text-[var(--whatsapp-text-secondary)] text-sm">
                  Online
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {/* Video Call */}
        <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors group">
          <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)] group-hover:text-[var(--whatsapp-text-primary)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </button>

        {/* Voice Call */}
        <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors group">
          <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)] group-hover:text-[var(--whatsapp-text-primary)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>

        {/* Search */}
        <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors group">
          <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)] group-hover:text-[var(--whatsapp-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* More Options */}
        <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors group">
          <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)] group-hover:text-[var(--whatsapp-text-primary)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
