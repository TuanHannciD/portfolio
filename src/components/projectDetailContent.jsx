export default function ProjectDetailContent({ project, compact = false }) {
  if (!project) return null;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
          {project.title}
        </h1>
        <p className="text-gray-400">{project.url}</p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-gray-700">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full ${compact ? "max-h-[320px] object-scale-down" : "h-64 lg:h-80 object-fill"}`}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/800x400/2A2A2A/FFFFFF?text=${encodeURIComponent(
              project.title
            )}`;
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">About This Project</h2>
            <p className="mb-4 leading-relaxed text-gray-300">{project.description}</p>
            <p className="leading-relaxed text-gray-300">{project.longDescription}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Demo Account</h2>
            <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 text-blue-100">
              {project.userdemo}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <i className="fas fa-check mt-1 text-sm text-green-400"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="mb-4 text-xl font-bold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-[#3A3A3A] px-3 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-xl font-bold text-white">Project Links</h3>
            <div className="space-y-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center !text-black justify-center gap-3 rounded-lg bg-blue-200 px-4 py-3 font-semibold transition-colors hover:bg-blue-700"
              >
                <i className="fas fa-external-link-alt"></i>
                <span>Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg bg-[#111111] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#1d1d1d]"
              >
                <i className="fab fa-github"></i>
                <span>View Code</span>
              </a>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-xl font-bold text-white">Project Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between gap-4">
                <span>Category</span>
                <span className="text-right text-white">{project.category}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Duration</span>
                <span className="text-right text-white">{project.duration}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Status</span>
                <span className="text-right text-green-400">{project.status}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
