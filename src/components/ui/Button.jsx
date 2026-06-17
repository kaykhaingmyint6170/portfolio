export function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', disabled = false, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md',
    secondary: 'border border-border text-text-secondary hover:border-primary hover:text-primary bg-transparent',
    ghost: 'text-text-secondary hover:text-text hover:bg-surface-secondary',
    gradient: 'bg-foreground text-background hover:shadow-lg hover:opacity-90',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-base gap-2.5',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
