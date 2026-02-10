import { Terminal as TerminalIcon, X, Minus, Circle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface TerminalProps {
    onClose: () => void;
}

type Command = {
    input: string;
    output: string[];
};

const commands: Record<string, string[]> = {
    help: [
        'Available commands:',
        '  about       - Learn about Prashant',
        '  skills      - View technical skills',
        '  projects    - List recent projects',
        '  education   - Educational background',
        '  contact     - Get contact information',
        '  experience  - Work experience',
        '  socials     - Social media links',
        '  clear       - Clear terminal',
        '  help        - Show this help message',
    ],
    about: [
        'Prashant Baral',
        '─────────────────────────────────',
        'Data Science & ML Enthusiast',
        '',
        'I work with data to turn messy, real-world problems into',
        'clear, usable insights. My focus is on data analysis,',
        'machine learning, and building reliable systems.',
        '',
        'I love bringing ideas to life through creativity,',
        'constantly learning new technologies to solve',
        'challenging problems.',
    ],
    skills: [
        'Technical Skills',
        '─────────────────────────────────',
        '',
        '📘 Programming Languages:',
        '   Python, C++, SQL, Java, HTML/CSS',
        '',
        '📊 Data Science & ML:',
        '   NumPy, Pandas, Matplotlib, Scikit-learn',
        '   Excel, Power BI',
        '',
        '🗄️ Backend & Databases:',
        '   FastAPI, Django, PostgreSQL, SQLAlchemy',
        '   Pydantic, Alembic, SQLite',
        '',
        '🛠️ Tools & DevOps:',
        '   Git, GitHub, Docker, Netlify, Figma',
    ],
    projects: [
        'Recent Projects',
        '─────────────────────────────────',
        '',
        '1. Ames Housing Price Prediction',
        '   → ML model with comprehensive preprocessing',
        '   → Tech: Python, Pandas, NumPy, Scikit-learn',
        '   → Kaggle Competition Project',
        '',
        '2. EV Charging Infrastructure Analysis',
        '   → Interactive Power BI dashboard',
        '   → Tech: Power BI, Data Analysis, Data Viz',
        '   → Live Dashboard Available',
        '',
        '3. Todo API with FastAPI',
        '   → RESTful API with JWT authentication',
        '   → Tech: FastAPI, PostgreSQL, Docker',
        '   → Deployed on Render',
        '',
        '4. Electric Vehicle Market Analysis',
        '   → Excel-based analysis dashboard',
        '   → Tech: Excel, Pivot Tables, Data Viz',
        '   → Government Dataset Analysis',
    ],
    education: [
        'Education',
        '─────────────────────────────────',
        '',
        '🎓 B.Tech in Computer Science',
        '   LPU, Punjab',
        '   2023 - 2027 (Current)',
        '   Specializing in Data Science & ML',
        '',
        '🎓 (+2) NEB - Science Stream',
        '   Sagarmatha School, Pokhara',
        '   2021 - 2023',
        '   Mathematics & Computer Science',
        '',
        '📚 Recent Certifications:',
        '   • Cloud Computing - NPTEL (Oct 2025)',
        '   • FastAPI Complete Course - Udemy (Nov 2025)',
        '   • Full Stack with AI Agents - W3grads (Jul 2025)',
        '   • Packet Switching Networks - Coursera (Oct 2024)',
        '   • Computer Networking - Google (Sep 2024)',
    ],
    contact: [
        'Contact Information',
        '─────────────────────────────────',
        '',
        '📧 Email: baralprashant09@gmail.com',
        '📱 Phone: +91 98765 43210',
        '📍 Location: Pokhara, Gandaki, Nepal',
        '',
        '🔗 Social Links:',
        '   GitHub:   github.com/prashant-baral',
        '   LinkedIn: linkedin.com/in/prashantbaral1',
        '',
        '💡 Status: Available for projects and collaborations',
    ],
    experience: [
        'Experience & Work',
        '─────────────────────────────────',
        '',
        '💼 Backend Development Intern',
        '   Angaar Batch - W3grads',
        '   Jun/July 2024',
        '   → Django MVT development',
        '   → REST API implementation',
        '   → Authentication & CRUD operations',
        '',
        '🚀 Currently Working On:',
        '   • Data Science & ML projects',
        '   • Building scalable backend systems',
        '   • Interactive data visualizations',
        '',
        '✅ Available For:',
        '   • Internships',
        '   • Freelance projects',
        '   • Collaborative opportunities',
    ],
    socials: [
        'Social Media & Links',
        '─────────────────────────────────',
        '',
        '🐙 GitHub',
        '   github.com/prashant-baral',
        '',
        '💼 LinkedIn',
        '   linkedin.com/in/prashantbaral1',
        '',
        '📧 Email',
        '   baralprashant09@gmail.com',
        '',
        '🌐 Portfolio',
        '   You\'re already here! 😊',
    ],
};

export function Terminal({ onClose }: TerminalProps) {
    const [history, setHistory] = useState<Command[]>([
        {
            input: '',
            output: [
                'Welcome to Prashant\'s Portfolio Terminal v1.0',
                'Type "help" for available commands.',
                '',
            ],
        },
    ]);
    const [currentInput, setCurrentInput] = useState('');
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        let output: string[];

        if (trimmedCmd === '') {
            output = [];
        } else if (commands[trimmedCmd]) {
            output = commands[trimmedCmd];
        } else {
            output = [
                `Command not found: ${trimmedCmd}`,
                'Type "help" for available commands.',
            ];
        }

        setHistory([...history, { input: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(currentInput);
        setCurrentInput('');
    };

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center p-4 z-50">
            <div
                className="bg-gray-900 rounded-2xl w-full max-w-3xl shadow-2xl border border-gray-700 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Terminal Header - Mac Style */}
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-all"
                        />
                        <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all" />
                        <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <TerminalIcon className="w-4 h-4" />
                        <span>terminal</span>
                    </div>
                    <div className="w-16" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    onClick={handleTerminalClick}
                    className="bg-gray-900 text-green-400 font-mono text-sm p-6 h-[500px] overflow-y-auto cursor-text"
                >
                    {/* Command History */}
                    {history.map((cmd, i) => (
                        <div key={i} className="mb-4">
                            {cmd.input && (
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-blue-400">➜</span>
                                    <span className="text-purple-400">~</span>
                                    <span className="text-white">{cmd.input}</span>
                                </div>
                            )}
                            {cmd.output.map((line, j) => (
                                <div key={j} className="text-gray-300 pl-6">
                                    {line}
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Current Input */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <span className="text-blue-400">➜</span>
                        <span className="text-purple-400">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-white caret-green-400"
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}