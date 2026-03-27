import projectsData from "../data/projects.json";

export default function Projects({
  onProjectClick,
  featuredProjects,
  registerProjectRef,
}) {
  const projects = featuredProjects ?? projectsData.projects;

  const handleProjectClick = (project) => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <section id="portfolio" className="fade-in mb-8 lg:mb-0 scroll-mt-28">
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white lg:text-3xl">
        <i className="fas fa-folder text-white"></i>
        Featured Portfolios
      </h2>
      <p className="mb-6 text-gray-400 lg:mb-8">
        Selected projects, demo access, and the details behind how they were built.
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            ref={(node) => registerProjectRef?.(project.id, node)}
            data-project-id={project.id}
            className="group cursor-pointer overflow-hidden rounded-xl bg-[#242424] shadow-lg ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-400/40"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gray-600 lg:h-48">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="flex h-full w-full items-center justify-center text-sm text-gray-400"
                style={{ display: project.thumbnail ? "none" : "flex" }}
              >
                Project Thumbnail
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-70 transition-all duration-300 group-hover:opacity-0">
                <div className="rounded-full p-3 backdrop-blur-sm">
                  <i className="fas fa-eye text-xl text-white"></i>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-6">
              <div className="mb-2 text-xs text-gray-400">{project.url}</div>
              <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-blue-400 lg:text-xl">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Open project story</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
