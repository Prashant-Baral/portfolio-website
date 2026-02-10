import { Code, Database, BarChart, Wrench } from 'lucide-react';

// Using same tag colors as Projects page
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
    "Data Analysis": "bg-amber-100 text-amber-700",
    "Data Visualization": "bg-orange-100 text-orange-700",

    FastAPI: "bg-violet-100 text-violet-700",
    Django: "bg-purple-100 text-purple-700",
    PostgreSQL: "bg-sky-100 text-sky-700",
    SQLAlchemy: "bg-violet-100 text-violet-700",
    Alembic: "bg-purple-100 text-purple-700",
    Pydantic: "bg-violet-100 text-violet-700",
    SQLite: "bg-sky-100 text-sky-700",
    MongoDB: "bg-sky-100 text-sky-700",

    GitHub: "bg-teal-100 text-teal-700",
    Docker: "bg-teal-100 text-teal-700",
    Git: "bg-emerald-100 text-emerald-700",
    Figma: "bg-fuchsia-100 text-fuchsia-700",
    "HTML/CSS": "bg-indigo-100 text-indigo-700",
    Netlify: "bg-indigo-100 text-indigo-700",
    Render: "bg-teal-100 text-teal-700",
};

const getTagColor = (tag: string) => tagColors[tag] || "bg-gray-100 text-gray-700";

// Skill logos mapping
const skillLogos: Record<string, string> = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

    NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    Matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    Excel: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
    "Power BI": "https://img.icons8.com/color/48/power-bi.png",
    "Data Analysis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Data Visualization": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",

    FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",

    SQLAlchemy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
    Pydantic: "https://docs.pydantic.dev/latest/logo-white.svg",
    Alembic: "https://alembic.sqlalchemy.org/en/latest/_static/sqla_logo.png",

    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    Netlify: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
};

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    iconBg: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        icon: <Code className="w-5 h-5" />,
        skills: ['Python', 'Cpp', 'SQL', 'Java', 'HTML/CSS'],
        iconBg: 'bg-blue-600',
    },
    {
        title: 'Data Science & ML',
        icon: <BarChart className="w-5 h-5" />,
        skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Excel', 'Power BI'],
        iconBg: 'bg-orange-600',
    },
    {
        title: 'Backend & Databases',
        icon: <Database className="w-5 h-5" />,
        skills: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic'],
        iconBg: 'bg-purple-600',
    },
    {
        title: 'Tools & DevOps',
        icon: <Wrench className="w-5 h-5" />,
        skills: ['Git', 'GitHub', 'Docker', 'Netlify'],
        iconBg: 'bg-teal-600',
    },
];

export function Skills() {
    return (
        <main className="flex-1 overflow-auto">
            <div className="max-w-[1200px] mx-auto px-7 py-10">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl mb-3">Skills</h1>
                    <p className="text-gray-600 text-base">
                        Technical skills across various domains
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl p-6 hover:border-black transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 ${category.iconBg} rounded-lg flex items-center justify-center text-white`}>
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-semibold">{category.title}</h2>
                            </div>

                            {/* Skills with Logos */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-full ${getTagColor(skill)} transition-transform duration-200 hover:scale-105`}
                                    >
                                        <img
                                            src={skillLogos[skill]}
                                            alt={skill}
                                            className="w-5 h-5 object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}