import { Heart } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../../lib/socialIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-text mb-2">
              Kay Khaing Myint
            </h3>
            <p className="text-sm text-text-secondary">
              Senior IT / Laravel PHP Developer building robust web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/kaykhaingmyint61706170"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-secondary transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/kay-khaing-myint"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-secondary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/kaykhaingmyint"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-secondary transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-text-tertiary">
            &copy; {year} Kay Khaing Myint. All rights reserved.
          </p>
          <p className="text-sm text-text-tertiary flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Laravel
          </p>
        </div>
      </div>
    </footer>
  );
}
