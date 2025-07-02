'use client';

import { useState, useEffect, useCallback } from 'react';
import { calculateTypingTime, delay } from '../utils/helpers';

export const useTypingSimulation = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);

  const simulateTyping = useCallback(async (messages, onMessageDisplay) => {
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      
      // Show typing indicator for incoming messages
      if (message.type === 'incoming') {
        setIsTyping(true);
        const typingTime = calculateTypingTime(message.content);
        await delay(typingTime);
        setIsTyping(false);
      }
      
      // Display the message
      const messageWithTimestamp = {
        ...message,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour12: true, 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      
      setDisplayedMessages(prev => [...prev, messageWithTimestamp]);
      setCurrentMessageIndex(i + 1);
      
      if (onMessageDisplay) {
        onMessageDisplay(messageWithTimestamp, i);
      }
      
      // Add delay between messages
      if (i < messages.length - 1) {
        await delay(500 + Math.random() * 1000);
      }
    }
  }, []);

  const resetSimulation = useCallback(() => {
    setIsTyping(false);
    setCurrentMessageIndex(0);
    setDisplayedMessages([]);
  }, []);

  return {
    isTyping,
    currentMessageIndex,
    displayedMessages,
    simulateTyping,
    resetSimulation
  };
};

export const useAutoScroll = (dependency) => {
  const [scrollRef, setScrollRef] = useState(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.scrollTop = scrollRef.scrollHeight;
    }
  }, [dependency, scrollRef]);

  return [scrollRef, setScrollRef];
};

export const useResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  return {
    isMobile,
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar
  };
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};
