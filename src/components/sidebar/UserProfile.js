'use client';

import Image from 'next/image';

export default function UserProfile({ personalData, onClose }) {
  return (
    <div className="absolute inset-0 bg-[var(--whatsapp-panel-bg)] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-[var(--whatsapp-primary)] px-4 py-4 flex items-center text-white">
        <button
          onClick={onClose}
          className="mr-4 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-medium">Profile</h2>
      </div>

      {/* Profile Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Avatar Section */}
        <div className="bg-[var(--whatsapp-background)] px-6 py-8 text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-[var(--whatsapp-primary)] flex items-center justify-center text-white text-4xl font-bold overflow-hidden mx-auto">
              {personalData.avatar ? (
                <Image
                  src={personalData.avatar}
                  alt={personalData.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              ) : (
                personalData.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-[var(--whatsapp-primary)] border-4 border-[var(--whatsapp-background)] rounded-full"></div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="px-6 py-4 space-y-6">
          {/* Name */}
          <div>
            <label className="text-[var(--whatsapp-text-secondary)] text-sm">Name</label>
            <p className="text-[var(--whatsapp-text-primary)] text-lg mt-1">{personalData.name}</p>
          </div>

          {/* Title */}
          <div>
            <label className="text-[var(--whatsapp-text-secondary)] text-sm">Title</label>
            <p className="text-[var(--whatsapp-text-primary)] text-lg mt-1">{personalData.title}</p>
          </div>

          {/* Bio */}
          <div>
            <label className="text-[var(--whatsapp-text-secondary)] text-sm">About</label>
            <p className="text-[var(--whatsapp-text-primary)] mt-1 leading-relaxed">{personalData.bio}</p>
          </div>

          {/* Status */}
          <div>
            <label className="text-[var(--whatsapp-text-secondary)] text-sm">Status</label>
            <div className="flex items-center mt-1">
              <div className="w-3 h-3 bg-[var(--whatsapp-primary)] rounded-full mr-2"></div>
              <p className="text-[var(--whatsapp-text-primary)]">{personalData.status}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-[var(--whatsapp-text-primary)] font-medium">Contact Information</h3>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--whatsapp-hover)] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--whatsapp-text-primary)]">{personalData.email}</p>
                <p className="text-[var(--whatsapp-text-secondary)] text-sm">Email</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--whatsapp-hover)] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--whatsapp-text-primary)]">{personalData.phone}</p>
                <p className="text-[var(--whatsapp-text-secondary)] text-sm">Phone</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--whatsapp-hover)] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--whatsapp-text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--whatsapp-text-primary)]">{personalData.location}</p>
                <p className="text-[var(--whatsapp-text-secondary)] text-sm">Location</p>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="pt-4">
            <a
              href={personalData.resume}
              download
              className="flex items-center justify-center w-full py-3 bg-[var(--whatsapp-primary)] text-white rounded-lg hover:bg-[var(--whatsapp-primary-dark)] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
