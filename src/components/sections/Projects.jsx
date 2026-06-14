import { useScrollAnimation } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { Card, CardBody, CardHeader } from '../ui/Card';
import { Badge } from '../ui/Badge';
import projects from '../../data/projects.json';
import { ExternalLink, Code } from 'lucide-react';

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full flex flex-col group">
        {/* Color accent bar */}
        <div
          className="h-1 rounded-t-xl -mx-6 -mt-6 mb-4"
          style={{ backgroundColor: project.color }}
        />

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary mt-0.5">{project.subtitle}</p>
            </div>
            <div
              className="p-2 rounded-lg shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <Code size={18} style={{ color: project.color }} />
            </div>
          </div>
        </CardHeader>

        <CardBody className="flex-1 flex flex-col">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-4 flex-1">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-text-secondary text-xs flex items-start gap-2">
                <span className="text-primary mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs text-text-tertiary">{project.role}</span>
            <span className="text-xs text-text-tertiary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={12} />
              Details
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function Projects() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          description="Real-world applications I developed and delivered"
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
