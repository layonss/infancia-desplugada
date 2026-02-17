interface InfoCardProps {
  icon?: string;
  title: string;
  description: string;
}

export default function InfoCard({
  icon,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md transition hover:shadow-lg">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>

      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
