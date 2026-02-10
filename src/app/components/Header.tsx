import { Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-2.5">
        <div className="flex items-center justify-between">
          {/* Left: Profile + Navigation */}
          <div className="flex items-center gap-6">
            {/* Profile */}
            <div className="flex items-center gap-2.5">
              <img
                src="/images/profile/prashant.jpg"
                alt="Developer"
                className="w-8 h-8 rounded-full object-cover border-2 border-black"
              />
              <div>
                <h1 className="text-sm font-semibold">Prashant Baral</h1>
                <p className="text-gray-500 text-xs">Data Science • ML</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs transition-all ${currentPage === item.id
                    ? 'text-black underline decoration-[#FF6B6B] decoration-2 underline-offset-4'
                    : 'text-gray-600 hover:text-black hover:underline hover:decoration-[#FF6B6B] hover:decoration-2 hover:underline-offset-4'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/prashant-baral"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashantbaral1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:baralprashant09@gmail.com"
              className="w-7 h-7 rounded-full border border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}