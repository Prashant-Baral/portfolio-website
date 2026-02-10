import { Download, GraduationCap, Briefcase, Award, Code, Calendar } from 'lucide-react';
import { useState } from 'react';

type Tab = 'education' | 'experience' | 'skills' | 'certifications';

// Using same tag colors as Skills page
const tagColors: Record<string, string> = {
    Python: "bg-blue-100 text-blue-700",
    Cpp: "bg-blue-100 text-blue-700",
    SQL: "bg-blue-100 text-blue-700",
    Java: "bg-blue-100 text-blue-700",
    JavaScript: "bg-blue-100 text-blue-700",

    NumPy: "bg-amber-100 text-amber-700",
    Excel: "bg-rose-100 text-rose-700",
    "Scikit-learn": "bg-orange-100 text-orange-700",
    Matplotlib: "bg-amber-100 text-amber-700",
    Pandas: "bg-orange-100 text-orange-700",
    "Power BI": "bg-red-100 text-red-700",

    FastAPI: "bg-violet-100 text-violet-700",
    Django: "bg-purple-100 text-purple-700",
    PostgreSQL: "bg-sky-100 text-sky-700",
    SQLAlchemy: "bg-violet-100 text-violet-700",
    Alembic: "bg-purple-100 text-purple-700",
    Pydantic: "bg-violet-100 text-violet-700",

    GitHub: "bg-teal-100 text-teal-700",
    Docker: "bg-teal-100 text-teal-700",
    Git: "bg-emerald-100 text-emerald-700",
};

const getTagColor = (tag: string) => tagColors[tag] || "bg-gray-100 text-gray-700";

export function Resume() {
    const [activeTab, setActiveTab] = useState<Tab>('education');

    const handleDownloadResume = () => {
        window.open('/assets/resume.pdf', '_blank');
    };

    const tabs = [
        { id: 'education' as Tab, label: 'Education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
        { id: 'experience' as Tab, label: 'Experience', icon: <Briefcase className="w-3.5 h-3.5" /> },
        { id: 'skills' as Tab, label: 'Skills', icon: <Code className="w-3.5 h-3.5" /> },
        { id: 'certifications' as Tab, label: 'Certifications', icon: <Award className="w-3.5 h-3.5" /> },
    ];

    return (
        <main className="flex-1 overflow-auto">
            <div className="max-w-[1000px] mx-auto px-6 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl mb-2">Resume</h1>
                        <p className="text-gray-600 text-sm">My professional journey</p>
                    </div>
                    <button
                        onClick={handleDownloadResume}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm transition-all ${activeTab === tab.id
                                ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                                : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                    {/* Education Tab */}
                    {activeTab === 'education' && (
                        <div className="space-y-3">
                            {/* B.Tech - Current */}
                            <div className="relative border-l-4 border-blue-500 pl-6 pb-4">
                                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-1">
                                        <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
                                            Current
                                        </span>
                                    </div>
                                    <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        LPU, Punjab • 2023 - 2027
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Specializing in Data Science and Machine Learning. Strong foundation in algorithms,
                                        data structures, and building scalable ML solutions.
                                    </p>
                                </div>
                            </div>

                            {/* +2 - Completed */}
                            <div className="relative border-l-4 border-gray-300 pl-6 pb-4">
                                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
                                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-1">(+2) NEB</h3>
                                    <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        Sagarmatha School, Pokhara • 2021 - 2023
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Science stream with Mathematics and Computer Science.
                                    </p>
                                </div>
                            </div>

                            {/* SEE - Completed */}
                            <div className="relative border-l-4 border-gray-300 pl-6">
                                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
                                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-1">Secondary Education Examination (SEE)</h3>
                                    <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        Tarakunj Secondary School, Pokhara • 2021
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Completed secondary level education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Experience Tab */}
                    {activeTab === 'experience' && (
                        <div className="space-y-3">
                            {/* Summer Training */}
                            <div className="relative border-l-4 border-blue-500 pl-6">
                                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-1">Summer Training</h3>
                                    <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        Angaar Batch • Jun/July-2024
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Developed backend features using Django MVT, implementing authentication,
                                        CRUD operations, and REST APIs with Django REST Framework
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Skills Tab */}
                    {activeTab === 'skills' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                <h3 className="text-base mb-3 font-bold text-gray-900">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Cpp', 'SQL', 'Java'].map(skill => (
                                        <span key={skill} className={`px-3 py-1.5 text-sm font-medium rounded ${getTagColor(skill)}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                <h3 className="text-base mb-3 font-bold text-gray-900">Data Science</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Pandas', 'NumPy', 'Matplotlib', 'Excel', 'Power BI', 'Scikit-learn'].map(skill => (
                                        <span key={skill} className={`px-3 py-1.5 text-sm font-medium rounded ${getTagColor(skill)}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                <h3 className="text-base mb-3 font-bold text-gray-900">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['FastAPI', 'Django', 'PostgreSQL', 'Pydantic', 'Alembic', 'SQLAlchemy'].map(skill => (
                                        <span key={skill} className={`px-3 py-1.5 text-sm font-medium rounded ${getTagColor(skill)}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                                <h3 className="text-base mb-3 font-bold text-gray-900">Tools & Platforms</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Docker', 'Git', 'GitHub'].map(skill => (
                                        <span key={skill} className={`px-3 py-1.5 text-sm font-medium rounded ${getTagColor(skill)}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Certifications Tab - Latest 6 only */}
                    {activeTab === 'certifications' && (
                        <div className="space-y-3">
                            {[
                                {
                                    title: 'Cloud Computing',
                                    issuer: 'NPTEL',
                                    date: 'Oct 2025',
                                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPVpb3tJn_WuYQ9auOiHrOKPpshJmsZ2SvA&s'
                                },
                                {
                                    title: 'FastAPI - The Complete Course 2026',
                                    issuer: 'Udemy',
                                    date: 'Nov 2025',
                                    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
                                },
                                {
                                    title: 'Full Stack with AI Agents',
                                    issuer: 'W3grads',
                                    date: 'Jul 2025',
                                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyxrV0jwhX8Ip0zzZ7JiEgvRMsP_FdPGvaw&s'
                                },
                                {
                                    title: 'Packet Switching Networks and Algorithms',
                                    issuer: 'Coursera',
                                    date: 'Oct 2024',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg'
                                },
                                {
                                    title: 'Peer-to-Peer Protocols and LANs',
                                    issuer: 'Coursera',
                                    date: 'Oct 2024',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg'
                                },

                            ].map((cert, i) => (
                                <div key={i} className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-3 hover:border-blue-500 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        {/* Provider Logo */}
                                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-gray-200 flex items-center justify-center p-2">
                                            <img
                                                src={cert.logo}
                                                alt={cert.issuer}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect fill="%23e0e7ff" width="48" height="48"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%233b82f6" font-size="10" font-weight="bold"%3E' + encodeURIComponent(cert.issuer) + '%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        </div>
                                        {/* Certificate Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-semibold mb-0.5 line-clamp-1">
                                                {cert.title}
                                            </h3>
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-xs text-gray-500">{cert.date}</span>
                                                <span className="text-xs text-gray-600 font-medium">{cert.issuer}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}