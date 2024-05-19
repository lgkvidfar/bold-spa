import { cn } from "../../utils/cn";

function SectionHeader({
  title,
  subtitle,
  css,
}: {
  title: string;
  subtitle?: string;
  css?: string;
}) {
  return (
    <div className={cn("mb-4 text-2xl", css)}>
      <div>{title}</div>
      {subtitle ? <div>{subtitle}</div> : null}
    </div>
  );
}

export default SectionHeader;
