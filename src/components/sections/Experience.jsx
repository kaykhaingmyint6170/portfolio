import { useScrollAnimation } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import experience from '../../data/experience.json';
import { Briefcase, Calendar } from 'lucide-react';

function TimelineItem({ item, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 last:pb-0 transition-all duration-500 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-border last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-surface flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-text">{item.role}</h3>
          {item.current && <Badge variant="primary">Current</Badge>}
        </div>

        <p className="text-primary font-medium text-sm mb-2">
          <Briefcase size={14} className="inline mr-1" />
          {item.company} — {item.location}
        </p>

        <p className="text-text-tertiary text-sm mb-3 flex items-center gap-1">
          <Calendar size={14} />
          {item.startDate} — {item.endDate}
        </p>

        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-28 bg-surface-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Career Journey"
          description="Over 4 years of growth and impact at Oriental Vigour Pte Ltd"
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
