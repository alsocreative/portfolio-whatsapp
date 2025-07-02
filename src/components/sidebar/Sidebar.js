'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactList from './ContactList';
import UserProfile from './UserProfile';

export default function Sidebar({ 
  contacts, 
  selectedContact, 
  onContactSelect, 
  personalData, 
  onToggleSidebar,
  isMobile 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfile, setShowProfile] = useState(false);
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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[var(--whatsapp-panel-bg)] px-4 py-3 border-b border-[var(--whatsapp-border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="relative group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--whatsapp-primary)] flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                {personalData.avatar ? (
                  <Image
                    src={personalData.avatar}
                    alt={personalData.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  personalData.name.charAt(0).toUpperCase()
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--whatsapp-primary)] border-2 border-[var(--whatsapp-panel-bg)] rounded-full"></div>
            </button>
            
            <div className="flex-1">
              <h2 className="text-[var(--whatsapp-text-primary)] font-medium text-lg">
                Portfolio
              </h2>
              <p className="text-[var(--whatsapp-text-secondary)] text-sm">
                {currentTime}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* New Chat */}
            <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors">
              <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Menu */}
            <button className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors">
              <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {/* Close button for mobile */}
            {isMobile && (
              <button 
                onClick={onToggleSidebar}
                className="p-2 rounded-full hover:bg-[var(--whatsapp-hover)] transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2 bg-[var(--whatsapp-panel-bg)] border-b border-[var(--whatsapp-border)]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-[var(--whatsapp-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[var(--whatsapp-background)] text-[var(--whatsapp-text-primary)] placeholder-[var(--whatsapp-text-secondary)] border border-[var(--whatsapp-border)] rounded-lg focus:outline-none focus:border-[var(--whatsapp-primary)] transition-colors"
          />
        </div>
      </div>

      {/* Profile Panel */}
      {showProfile && (
        <UserProfile 
          personalData={personalData}
          onClose={() => setShowProfile(false)}
        />
      )}

      {/* Contact List */}
      <div className="flex-1 overflow-y-auto">
        <ContactList
          contacts={filteredContacts}
          selectedContact={selectedContact}
          onContactSelect={onContactSelect}
        />
      </div>

      {/* Status Bar */}
      <div className="bg-[var(--whatsapp-panel-bg)] px-4 py-2 border-t border-[var(--whatsapp-border)]">
        <div className="flex items-center justify-between text-xs text-[var(--whatsapp-text-secondary)]">
          <span>WhatsApp Portfolio</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-[var(--whatsapp-primary)] rounded-full"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
