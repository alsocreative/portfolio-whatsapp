// Utility functions for the WhatsApp Portfolio

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', { 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getRandomDelay = (min = 500, max = 2000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateMessageId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

export const scrollToBottom = (element) => {
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
};

export const smoothScrollToBottom = (element) => {
  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth'
    });
  }
};

// Simulate typing speed based on message length
export const calculateTypingTime = (message) => {
  const wordsPerMinute = 80;
  const charactersPerMinute = wordsPerMinute * 5; // Average 5 characters per word
  const charactersPerSecond = charactersPerMinute / 60;
  const minTime = 1000; // Minimum 1 second
  const maxTime = 5000; // Maximum 5 seconds
  
  const calculatedTime = (message.length / charactersPerSecond) * 1000;
  
  return Math.min(Math.max(calculatedTime, minTime), maxTime);
};

// Check if device is mobile
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Get contact category color
export const getCategoryColor = (category) => {
  const colors = {
    personal: '#3B82F6',    // Blue
    technical: '#8B5CF6',   // Purple
    professional: '#10B981', // Green
    projects: '#F59E0B',    // Orange
    academic: '#6366F1',    // Indigo
    social: '#EAB308',      // Yellow
    contact: '#EF4444',     // Red
    content: '#EC4899'      // Pink
  };
  return colors[category] || '#6B7280'; // Gray as default
};

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Get file extension icon
export const getFileIcon = (fileName) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  const iconMap = {
    // Documents
    pdf: '📄',
    doc: '📝',
    docx: '📝',
    txt: '📝',
    rtf: '📝',
    
    // Spreadsheets
    xls: '📊',
    xlsx: '📊',
    csv: '📊',
    
    // Presentations
    ppt: '📈',
    pptx: '📈',
    
    // Archives
    zip: '📦',
    rar: '📦',
    tar: '📦',
    gz: '📦',
    
    // Images
    jpg: '🖼️',
    jpeg: '🖼️',
    png: '🖼️',
    gif: '🖼️',
    svg: '🖼️',
    
    // Code files
    js: '📄',
    html: '📄',
    css: '📄',
    json: '📄',
    xml: '📄',
    
    // Default
    default: '📁'
  };
  
  return iconMap[extension] || iconMap.default;
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Copy text to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

// Generate avatar initials
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
};

// Check if string is URL
export const isURL = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

// Generate random color
export const generateRandomColor = () => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
