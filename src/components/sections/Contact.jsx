import { useScrollAnimation, useContactForm } from '../../hooks';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Send, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../../lib/socialIcons';

export function Contact() {
  const [ref, visible] = useScrollAnimation();
  const { name, email, message, handleChange, handleSubmit, status, loading } = useContactForm();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-5 gap-8 items-start transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact form */}
          <Card className="md:col-span-3" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="md" disabled={loading}>
                <Send size={16} className={loading ? 'animate-pulse' : ''} />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {status.text && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-600 border border-red-500/20'
                  }`}
                >
                  {status.text}
                </div>
              )}
            </form>
          </Card>

          {/* Contact info sidebar */}
          <div className="md:col-span-2 space-y-4">
            <Card hover={false}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text">Email</h4>
                    <a href="mailto:kaykhaingmyint6170@gmail.com" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      kaykhaingmyint6170@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent-dark shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text">Location</h4>
                    <p className="text-sm text-text-secondary">Yangon, Myanmar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Github size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text">GitHub</h4>
                    <a href="https://github.com/kaykhaingmyint61706170" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      github.com/kaykhaingmyint6170
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent-dark shrink-0">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text">LinkedIn</h4>
                    <a href="https://linkedin.com/in/kay-khaing-myint" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors">
                      linkedin.com/in/kay-khaing-myint
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card glass className="text-center">
              <p className="text-sm text-text-secondary">
                Currently open to freelance opportunities and full-time roles.
              </p>
              <p className="text-sm font-medium text-primary mt-1">
                Available for hire!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
