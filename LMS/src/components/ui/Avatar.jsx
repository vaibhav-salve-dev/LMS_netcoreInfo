export default function Avatar({ src, alt = 'User', size = 'md', ring = false }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover ${ring ? 'ring-2 ring-white' : ''}`}
    />
  );
}