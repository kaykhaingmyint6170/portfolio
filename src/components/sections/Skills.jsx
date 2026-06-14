import { useScrollAnimation } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { SkillBar } from '../ui/SkillBar';
import skills from '../../data/skills.json';

export function Skills() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-28 bg-surface-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tech Stack & Expertise"
          description="Technologies I've mastered over 4+ years of professional development"
        />

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skills.categories.map((category) => (
            <Card key={category.name} hover={false} className="flex flex-col">
              <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-5 pb-3 border-b border-border">
                {category.name}
              </h3>
              <div className="space-y-4 flex-1">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
