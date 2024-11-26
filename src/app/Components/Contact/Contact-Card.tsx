interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    action: {
      text: string;
      href: string;
    };
  }
  
  export default function ContactCard({
    icon,
    title,
    description,
    action,
  }: ContactCardProps) {
    return (
      <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
        <div className="w-5 h-5 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={action.href}
          className="text-sm font-medium text-gray-900 hover:text-gray-700"
        >
          {action.text}
        </a>
      </div>
    );
  }