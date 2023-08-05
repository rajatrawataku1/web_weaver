export function NameComponent({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return <div className={className}>{name}</div>;
}
