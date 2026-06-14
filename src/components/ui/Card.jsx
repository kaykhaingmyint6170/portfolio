export function Card({ children, className = '', hover = true, glass = false }) {
  const base = 'rounded-xl p-6 border border-border bg-surface';
  const hoverEffect = hover ? 'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300' : '';
  const glassStyle = glass ? 'glass' : '';

  return (
    <div className={`${base} ${hoverEffect} ${glassStyle} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}
