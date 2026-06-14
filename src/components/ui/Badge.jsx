export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-secondary text-text-secondary border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent-dark border-accent/20',
    success: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
