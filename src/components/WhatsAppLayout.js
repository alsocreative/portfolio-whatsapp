'use client';

import { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import ChatArea from './chat/ChatArea';
import { portfolioData } from '../data/portfolio';

export default function WhatsAppLayout({ defaultContact = 'about' }) {
  const [selectedContact, setSelectedContact] = useState(defaultContact);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactSelect = (contactId) => {
    setSelectedContact(contactId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex bg-[var(--whatsapp-background)] overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${isMobile ? 'absolute z-50 w-full' : 'relative w-1/3 min-w-[320px] max-w-[400px]'}
          transition-transform duration-300 ease-in-out
          bg-[var(--whatsapp-panel-bg)] border-r border-[var(--whatsapp-border)]
          h-full flex flex-col
        `}
      >
        <Sidebar
          contacts={portfolioData.contacts}
          selectedContact={selectedContact}
          onContactSelect={handleContactSelect}
          personalData={portfolioData.personal}
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
      </div>

      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[var(--whatsapp-chat-bg)] relative">
        <ChatArea
          selectedContact={selectedContact}
          conversation={portfolioData.conversations[selectedContact] || []}
          contactInfo={portfolioData.contacts.find(c => c.id === selectedContact)}
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
}
