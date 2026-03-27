import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectDetailContent from "./projectDetailContent";

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#171717]/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Project Preview
            </p>
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={`/project/${project.id}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-blue-400 hover:text-white"
            >
              Open Shareable Link
            </Link>
            <button
              onClick={onClose}
              className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>

        <div className="max-h-[calc(90vh-77px)] overflow-y-auto px-6 py-6 lg:px-8">
          <ProjectDetailContent project={project} compact />
        </div>
      </div>
    </div>
  );
}
