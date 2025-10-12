import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectDetail from "../data/projectDetail.json";

export default function ProjectDetail({ onBack }) {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const projects = projectDetail.projectDetail;

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="fade-in min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in min-h-screen">
      {/* Header with Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Portfolio</span>
        </button>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          {project.title}
        </h1>
        <p className="text-gray-400">{project.url}</p>
      </div>

      {/* Project Image */}
      <div className="mb-8">
        <div className="bg-gray-700 rounded-xl overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 lg:h-80 "
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800x400/2A2A2A/FFFFFF?text=${encodeURIComponent(
                project.title
              )}`;
            }}
          />
        </div>
      </div>

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              About This Project
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Demo</h2>
            <p className="text-gray-300 leading-relaxed">{project.userdemo}</p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <i className="fas fa-check text-green-400 mt-1 text-sm"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#3A3A3A] text-gray-300 px-3 py-2 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
            <div className="space-y-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-black hover:bg-blue-700 text-black px-4 py-3 rounded-lg transition-colors"
              >
                <i className="fas fa-external-link-alt group-hover:text-black"></i>
                <span className="group-hover:text-black">Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-black hover:bg-blue-700 text-black px-4 py-3 rounded-lg transition-colors"
              >
                <i className="fab fa-github group-hover:text-black"></i>
                <span className="group-hover:text-black">View Code</span>
              </a>
            </div>
          </section>

          {/* Project Info */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Category:</span>
                <span className="text-white">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="text-white">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-green-400">{project.status}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
