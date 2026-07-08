type Props = {
  children: string;
  className?: string;
  /** HTML element — `p` for sublines, `div` for accent strips. */
  as?: 'p' | 'div' | 'span';
  /** Stack each sentence on its own line — off by default for natural wrapping. */
  stackSentences?: boolean;
};

/**
 * Body copy under headlines. By default flows as one condensed paragraph;
 * opt into `stackSentences` only where deliberate line breaks help rhythm.
 */
export function IosSubline({
  children,
  className = '',
  as: Tag = 'p',
  stackSentences = false,
}: Props) {
  if (!stackSentences) {
    return <Tag className={className}>{children}</Tag>;
  }

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
