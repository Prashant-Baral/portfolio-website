import { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';

export function FooterApis() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-2.5">
        <div className="flex items-center justify-between text-xs text-gray-500">
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()} Prashant Baral
          </div>

          {/* Center: Status */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#00FF00] rounded-full"></span>
            <span>All systems operational</span>
          </div>

          {/* Right: Time + Analytics */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span>
                {time.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </span>
              <span className="text-xs text-gray-400">NPT</span>
            </div>

            <a
              href="https://cloud.umami.is/analytics/eu/share/w3OTIP9hQIi0PNfT"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-6 h-6 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <BarChart3 className="w-3 h-3" />
              <span className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Analytics
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}