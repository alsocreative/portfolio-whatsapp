'use client';

export default function EducationCard({ data }) {
  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg">
            {data.degree}
          </h3>
          <p className="text-[var(--whatsapp-primary)] font-medium">
            {data.institution}
          </p>
          <div className="flex items-center space-x-4 mt-1">
            <p className="text-[var(--whatsapp-text-secondary)] text-sm">
              {data.period}
            </p>
            {data.gpa && (
              <p className="text-[var(--whatsapp-text-secondary)] text-sm">
                GPA: {data.gpa}
              </p>
            )}
          </div>
        </div>
        <div className="text-2xl">🎓</div>
      </div>

      {data.achievements && (
        <div className="mb-4">
          <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2">
            🏆 Achievements:
          </h4>
          <ul className="space-y-1">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="text-[var(--whatsapp-text-secondary)] text-sm flex items-start">
                <span className="text-[var(--whatsapp-primary)] mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.coursework && (
        <div>
          <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2">
            📚 Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.coursework.map((course, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[var(--whatsapp-background)] text-[var(--whatsapp-text-primary)] text-xs rounded-full border border-[var(--whatsapp-border)]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
