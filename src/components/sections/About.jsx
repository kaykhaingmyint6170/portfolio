import { useScrollAnimation } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import profile from '../../data/profile.json';
import { MapPin, Mail, Globe } from 'lucide-react';

export function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="A passionate developer building impactful web solutions"
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 items-start transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Info column */}
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              {profile.summary}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Globe size={16} className="text-primary shrink-0" />
                <span>{profile.languages.map(l => l.name).join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Languages & Stats column */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-text mb-4 flex items-center gap-2">
                <Globe size={16} className="text-primary" />
                Languages
              </h3>
              <div className="space-y-4">
                {profile.languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text font-medium">{lang.name}</span>
                      <span className="text-text-tertiary">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '4+', label: 'Years Exp' },
                { value: '15+', label: 'Projects' },
                { value: '3', label: 'Languages' },
              ].map(stat => (
                <Card key={stat.label} hover={false} className="text-center py-4">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
