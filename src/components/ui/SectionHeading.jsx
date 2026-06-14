export function SectionHeading({ label, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass}`}>
      {label && (
        <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
