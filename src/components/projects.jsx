export default function Projects({ onProjectClick }) {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "E-commerce website for shoe retail with modern UI/UX design and shopping cart functionality.",
      url: "datn-lor.onrender.com",
      thumbnail: "/datn-lor.jpg",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "My professional portfolio website showcasing my projects and skills.",
      url: "portfolio.dobatuan.dev",
      thumbnail: "/Portfolio.png",
    },
  ];

  const handleProjectClick = (project) => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <section id="portfolio" className="mb-8 lg:mb-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center gap-3">
        <i className="fas fa-folder text-white"></i>
        Featured Portfolios
      </h2>
      <p className="text-gray-400 mb-6 lg:mb-8">
        A glimpse into my professional journey.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#2A2A2A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => handleProjectClick(project)}
          >
            <div className="h-40 lg:h-48 bg-gray-600 flex items-center justify-center overflow-hidden relative">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="text-gray-400 text-sm flex items-center justify-center w-full h-full"
                style={{ display: project.thumbnail ? "none" : "flex" }}
              >
                Project Thumbnail
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-0 bg-black bg-opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className=" bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                  <i className="fas fa-eye text-white text-xl"></i>
                </div>
              </div>
            </div>
            <div className="p-4 lg:p-6">
              <div className="text-xs text-gray-400 mb-2">{project.url}</div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Click hint */}
              <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Click to view details</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
