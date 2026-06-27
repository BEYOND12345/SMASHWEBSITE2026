type Props = {
  children: string;
  className?: string;
  /** HTML element — `p` for sublines, `div` for accent strips. */
  as?: 'p' | 'div' | 'span';
};

/**
 * Split copy after sentence-ending full stops so each clause sits on its own line.
 * A non-breaking space after a full stop is treated as "keep together" — it won't
 * split (e.g. "…a quote.\u00A0Done." stays on one clause).
 */
export function IosSubline({ children, className = '', as: Tag = 'p' }: Props) {
  const sentences = children.split(/(?<=\.)[^\S\u00A0]+/).filter(Boolean);

  if (sentences.length <= 1) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      {sentences.map((sentence, i) => (
        <span key={i} className="block">
          {sentence}
        </span>
      ))}
    </Tag>
  );
}
