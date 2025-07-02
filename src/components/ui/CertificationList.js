'use client';

export default function CertificationList({ certifications }) {
  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg mb-4 flex items-center">
        <span className="mr-2">🏅</span>
        Certifications & Courses
      </h3>
      
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-[var(--whatsapp-background)] rounded-lg border border-[var(--whatsapp-border)]">
            <div className="w-10 h-10 bg-[var(--whatsapp-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {cert.issuer.charAt(0)}
            </div>
            
            <div className="flex-1">
              <h4 className="text-[var(--whatsapp-text-primary)] font-medium">
                {cert.name}
              </h4>
              <p className="text-[var(--whatsapp-text-secondary)] text-sm">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[var(--whatsapp-text-tertiary)] text-xs">
                  Issued: {cert.date}
                </span>
                {cert.credentialId && (
                  <span className="text-[var(--whatsapp-text-tertiary)] text-xs">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>

            <div className="text-[var(--whatsapp-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
