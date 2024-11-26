import React from "react";

export const FloatingTechStack: React.FC = () => {
  const techStack = [
    // Front-End Technologies
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      name: "Angular",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      name: "Vue",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      name: "Wordpress",
    },

    // Back-End Technologies
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg",
      name: "Nest.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
      name: "Laravel",
    },

    // Databases
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      name: "MySql",
    },

    // DevOps/Cloud
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      name: "Docker",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      name: "AWS",
    },

    // Mobile Development
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg",
      name: "Mobile Development",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-center mb-16">
        Our Technology Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="group relative">
            <div
              className="w-20 h-20 rounded-xl shadow-lg bg-white p-4 transition-all duration-300 
                         hover:shadow-2xl hover:-translate-y-2 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
