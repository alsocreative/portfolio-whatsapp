'use client';

export default function SkillCard({ data }) {
  return (
    <div className="bg-[var(--whatsapp-panel-bg)] p-4 rounded-lg border border-[var(--whatsapp-border)]">
      <h3 className="text-[var(--whatsapp-text-primary)] font-semibold mb-3 flex items-center">
        <span className="mr-2">{data.category === 'Frontend' ? '💻' : data.category === 'Backend' ? '⚙️' : '☁️'}</span>
        {data.category} Skills
      </h3>
      
      <div className="space-y-3">
        {data.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{skill.icon}</span>
              <span className="text-[var(--whatsapp-text-primary)] font-medium">{skill.name}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-24 bg-[var(--whatsapp-background)] rounded-full h-2">
                <div 
                  className="bg-[var(--whatsapp-primary)] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-[var(--whatsapp-text-secondary)] text-sm font-medium w-8">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
