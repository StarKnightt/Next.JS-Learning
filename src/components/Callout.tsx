interface CalloutProps {
  type: "info" | "warning" | "tip" | "danger";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: { bg: "bg-brutal-cyan/20", border: "border-brutal-cyan", icon: "💡" },
  warning: { bg: "bg-brutal-orange/20", border: "border-brutal-orange", icon: "⚠️" },
  tip: { bg: "bg-brutal-lime/20", border: "border-brutal-lime", icon: "🚀" },
  danger: { bg: "bg-brutal-red/20", border: "border-brutal-red", icon: "🔥" },
};

export function Callout({ type, title, children }: CalloutProps) {
  const style = styles[type];

  return (
    <div className={`my-6 brutal-border ${style.bg} border-l-8 ${style.border} p-4`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{style.icon}</span>
        <div>
          {title && <p className="font-bold text-sm uppercase mb-1">{title}</p>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
