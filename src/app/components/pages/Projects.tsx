import { ExternalLink, Github, Database, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from '@/app/components/Sigma/ImageWithFallback';

/* ---------------- Tag Colors ---------------- */
const tagColors: Record<string, string> = {
  // Programming Languages - Blue shades
  Python: "bg-blue-100 text-blue-700",
  Cpp: "bg-blue-100 text-blue-700",
  SQL: "bg-blue-100 text-blue-700",
  Java: "bg-blue-100 text-blue-700",

  // Data Science/Analysis - Amber/Orange shades
  NumPy: "bg-amber-100 text-amber-700",
  Pandas: "bg-orange-100 text-orange-700",
  Matplotlib: "bg-amber-100 text-amber-700",
  "Scikit-learn": "bg-orange-100 text-orange-700",
  "Data Analysis": "bg-amber-100 text-amber-700",
  "Data Visualization": "bg-orange-100 text-orange-700",

  // BI/Spreadsheet Tools - Red/Rose shades
  Excel: "bg-rose-100 text-rose-700",
  "Power BI": "bg-red-100 text-red-700",
  "Pivot Tables": "bg-rose-100 text-rose-700",

  // Backend/API - Violet/Purple shades
  FastAPI: "bg-violet-100 text-violet-700",
  Django: "bg-purple-100 text-purple-700",
  SQLAlchemy: "bg-violet-100 text-violet-700",
  Alembic: "bg-purple-100 text-purple-700",
  Pydantic: "bg-violet-100 text-violet-700",

  // Databases - Sky/Cyan shades
  PostgreSQL: "bg-sky-100 text-sky-700",
  SQLite: "bg-cyan-100 text-cyan-700",

  // DevOps/Tools - Teal/Emerald shades
  Docker: "bg-teal-100 text-teal-700",
  Git: "bg-emerald-100 text-emerald-700",
  GitHub: "bg-teal-100 text-teal-700",

  // Web/Frontend - Indigo/Slate shades
  "HTML/CSS": "bg-indigo-100 text-indigo-700",
  "Web Design": "bg-slate-100 text-slate-700",
  Figma: "bg-fuchsia-100 text-fuchsia-700",
  Netlify: "bg-indigo-100 text-indigo-700",

  // AI/ML - Green shades
  "Google Gemini": "bg-green-100 text-green-700",
};

const getTagColor = (tag: string) =>
  tagColors[tag] || "bg-gray-100 text-gray-700";

/*Types  */
type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  dataset?: string;
  image: string;
  detailedDescription: string;
  features: string[];
};

/* Data  */
const projects: Project[] = [
  {
    title: 'Ames Housing Price Prediction',
    description: 'Housing price prediction model focused on comprehensive data preprocessing including handling missing values, feature encoding, scaling, and feature engineering techniques.',
    detailedDescription: 'A comprehensive machine learning project that predicts housing prices using the Ames Housing dataset. This project demonstrates end-to-end data science workflow from data cleaning to model deployment.',
    features: [
      'Comprehensive data preprocessing and cleaning',
      'Advanced feature engineering techniques',
      'Multiple regression models comparison',
      'Cross-validation and hyperparameter tuning',
      'Detailed exploratory data analysis'
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    demo: "https://www.kaggle.com/code/prashantbrl/ames-house-predcition-final",
    dataset: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques",
    image: "/assets/projects/Ames.jpg"
  },
  {
    title: 'EV Charging Infrastructure Analysis',
    description: 'Interactive Power BI dashboard analyzing electric vehicle charging station distribution, usage patterns, and infrastructure gaps across regions.',
    detailedDescription: 'An interactive Power BI dashboard that provides insights into electric vehicle charging infrastructure, analyzing distribution patterns, usage trends, and identifying areas for infrastructure development.',
    features: [
      'Interactive visualizations for geographic distribution',
      'Usage pattern analysis across different time periods',
      'Infrastructure gap identification',
      'Regional comparison metrics',
      'Real-time data filtering and drill-down capabilities'
    ],
    tags: ['Power BI', 'Data Analysis', 'Data Visualization'],
    github: 'https://github.com/Prashant-Baral/Electric-Vehicle-Charging-Stations-Analysis',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiZTljNjcwYjctMGExYi00ODdhLWFiM2YtODhmMWE0OTVmNzljIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
    dataset: "https://afdc.energy.gov/data",
    image: "/assets/projects/EV_first.png"
  },
  {
    title: 'Todo API with FastAPI',
    description: 'Full-featured RESTful API with JWT authentication, PostgreSQL database, user management, and admin controls. Deployed on Render with automated testing and migrations.',
    detailedDescription: 'A production-ready RESTful API built with FastAPI featuring secure authentication, database management, and comprehensive CRUD operations. Includes user roles, admin controls, and automated deployment.',
    features: [
      'JWT-based authentication and authorization',
      'User role management (Admin/Regular users)',
      'Complete CRUD operations for todos',
      'PostgreSQL database with SQLAlchemy ORM',
      'Automated database migrations with Alembic',
      'Deployed on Render with CI/CD pipeline'
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Pydantic'],
    github: 'https://github.com/Prashant-Baral/TodoApp_FastAPI',
    demo: 'https://todoapp-fastapi-2zwu.onrender.com/',
    image: "/assets/projects/todo_app.png"
  },
  {
    title: 'Electric Vehicle Market Analysis',
    description: 'Comprehensive Excel dashboard examining EV adoption trends, market share, vehicle specifications, and growth patterns in the automotive industry.',
    detailedDescription: 'A detailed Excel-based analysis dashboard that tracks electric vehicle market trends, adoption rates, and provides insights into the growing EV automotive sector.',
    features: [
      'Interactive pivot tables for multi-dimensional analysis',
      'Dynamic charts showing adoption trends',
      'Market share analysis by manufacturer',
      'Vehicle specification comparisons',
      'Growth pattern visualizations',
      'Year-over-year trend analysis'
    ],
    tags: ['Excel', 'Data Analysis', 'Pivot Tables', 'Data Visualization'],
    github: 'https://github.com/Prashant-Baral/Electric-Vehicle-insights-Dashboard',
    dataset: "https://catalog.data.gov/dataset/electric-vehicle-population-data",
    image: "/assets/projects/dashboard.png"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setModalPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalPosition({ x: 0, y: 0 });
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-7 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl mb-3">Projects</h1>
          <p className="text-gray-600 text-base">
            A selection of data science and ML projects built end-to-end.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="border border-gray-200 rounded-xl p-5 hover:border-black transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl mb-2.5">{project.title}</h2>
              <p className="text-gray-600 mb-3.5 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs rounded-full ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2.5">
                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}

                {/* Demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-[#47c584] text-white rounded-lg hover:bg-black transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}

                {/* Dataset */}
                {project.dataset && (
                  <a
                    href={project.dataset}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 text-white rounded-lg hover:bg-emerald-500 transition-all text-sm"
                  >
                    <Database className="w-4 h-4" />
                    Dataset
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 backdrop-blur-[5px] flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full relative shadow-2xl border border-gray-200"
            style={{
              transform: `translate(${modalPosition.x}px, ${modalPosition.y}px)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
          >
            {/* Mac-style Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-all z-10 shadow-md flex items-center justify-center"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <X className="w-2 h-2 text-white" strokeWidth={3} />
            </button>

            {/* Horizontal Layout */}
            <div className="flex">
              {/* Left Side - Image */}
              <div className="w-2/5 flex-shrink-0">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-base font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-1">
                    {selectedProject.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[#47c584] mt-0.5">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h3 className="text-base font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 text-xs rounded-full ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto pt-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-[#47c584] text-white rounded-lg hover:bg-black transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}

                  {selectedProject.dataset && (
                    <a
                      href={selectedProject.dataset}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-emerald-500 transition-all text-sm"
                    >
                      <Database className="w-4 h-4" />
                      Dataset
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}