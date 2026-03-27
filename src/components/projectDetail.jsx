import { useMemo } from "react";
import { useParams } from "react-router-dom";
import projectDetail from "../data/projectDetail.json";
import ProjectDetailContent from "./projectDetailContent";

export default function ProjectDetail({ onBack }) {
  const { id } = useParams();

  const project = useMemo(() => {
    return projectDetail.projectDetail.find((item) => item.id === Number(id));
  }, [id]);

  if (!project) {
    return (
      <div className="fade-in flex min-h-screen items-center justify-center overflow-auto">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">Project Not Found</h1>
          <button
            onClick={onBack}
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in overflow-auto lg:min-h-0 lg:max-h-[calc(100vh-20vh)]">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Portfolio</span>
        </button>
      </div>

      <ProjectDetailContent project={project} />
    </div>
  );
}
