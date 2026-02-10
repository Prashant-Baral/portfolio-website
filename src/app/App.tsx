import { useState } from 'react';
import { Header } from './components/Header';
import { Terminal } from './components/pages/Terminal';
import { Home } from './components/pages/Home';
import { Skills } from './components/pages/Skills';
import { Projects } from './components/pages/Projects';
import { Certifications } from './components/pages/Certifications';
import { Resume } from './components/pages/Resume';
import { Contact } from './components/pages/Contact';
import { FooterApis } from './components/FooterApis';

type Page = 'home' | 'skills' | 'projects' | 'certifications' | 'achievements' | 'resume' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showTerminal, setShowTerminal] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={(page) => setCurrentPage(page as Page)} />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={(page) => setCurrentPage(page as Page)} />;
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Header with Navigation */}
      <Header currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as Page)} />

      {/* Main Content - Pages */}
      {renderPage()}

      {/* Footer with Terminal button */}
      <FooterApis onOpenTerminal={() => setShowTerminal(true)} />

      {/* Terminal Modal */}
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </div>
  );
}