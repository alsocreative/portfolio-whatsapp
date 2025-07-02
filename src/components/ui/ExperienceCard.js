'use client';

export default function ExperienceCard({ data }) {
  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-[var(--whatsapp-text-primary)] font-semibold text-lg">
            {data.title}
          </h3>
          <p className="text-[var(--whatsapp-primary)] font-medium">
            {data.company}
          </p>
          <p className="text-[var(--whatsapp-text-secondary)] text-sm">
            {data.period} • {data.location}
          </p>
        </div>
        <div className="text-2xl">💼</div>
      </div>

      <p className="text-[var(--whatsapp-text-primary)] mb-4 leading-relaxed">
        {data.description}
      </p>

      <div className="mb-4">
        <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2">
          🎯 Key Achievements:
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

      <div>
        <h4 className="text-[var(--whatsapp-text-primary)] font-medium mb-2">
          🛠️ Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-[var(--whatsapp-background)] text-[var(--whatsapp-text-primary)] text-xs rounded-full border border-[var(--whatsapp-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
