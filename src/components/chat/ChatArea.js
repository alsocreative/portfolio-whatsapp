'use client';

import { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatArea({ 
  selectedContact, 
  conversation, 
  contactInfo, 
  onToggleSidebar, 
  isMobile, 
  sidebarOpen 
}) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate typing and message appearance
  useEffect(() => {
    if (!conversation || conversation.length === 0) return;

    setMessages([]);
    setMessageIndex(0);
    setIsTyping(false);

    const displayNextMessage = (index) => {
      if (!conversation || index >= conversation.length) {
        setIsTyping(false);
        return;
      }

      const currentMessage = conversation[index];
      
      // Show typing indicator for incoming messages
      if (currentMessage.type === 'incoming') {
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, currentMessage]);
          setMessageIndex(index + 1);
          
          // Continue with next message after a delay
          setTimeout(() => {
            displayNextMessage(index + 1);
          }, 800);
        }, 1000 + Math.random() * 1000); // Random typing delay
      } else {
        // For other message types, show immediately
        setMessages(prev => [...prev, currentMessage]);
        setMessageIndex(index + 1);
        
        setTimeout(() => {
          displayNextMessage(index + 1);
        }, 500);
      }
    };

    const timer = setTimeout(() => {
      displayNextMessage(0);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedContact, conversation]);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: Date.now(),
      type: 'outgoing',
      content: messageText,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isTyping: false
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate a response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response = {
          id: Date.now() + 1,
          type: 'incoming',
          content: "Thanks for your message! I'll get back to you soon. Feel free to explore other sections of my portfolio in the meantime! 😊",
          timestamp: new Date().toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit' 
          }),
          isTyping: false
        };
        setMessages(prev => [...prev, response]);
      }, 1500);
    }, 1000);
  };

  if (!contactInfo) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[var(--whatsapp-chat-bg)]">
        <div className="text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-2xl text-[var(--whatsapp-text-primary)] mb-2">
            WhatsApp Portfolio
          </h2>
          <p className="text-[var(--whatsapp-text-secondary)]">
            Select a section to start exploring my portfolio
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader 
        contact={contactInfo} 
        onToggleSidebar={onToggleSidebar}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="flex-1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}>
          </div>
        </div>

        <MessageList 
          messages={messages} 
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
        />
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
