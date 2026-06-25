type Props = {
  children: string;
  className?: string;
  /** HTML element — `p` for sublines, `div` for accent strips. */
  as?: 'p' | 'div' | 'span';
};

/** Split copy after sentence-ending full stops so each clause sits on its own line. */
export function IosSubline({ children, className = '', as: Tag = 'p' }: Props) {
  const sentences = children.split(/(?<=\.)\s+/).filter(Boolean);

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
