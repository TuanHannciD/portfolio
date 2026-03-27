import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Hero from "./hero";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Gallery from "./gallery";
import ProjectDetailModal from "./projectDetailModal";
import projectDetailData from "../data/projectDetail.json";

const sectionOrder = ["about", "experience", "portfolio", "contact", "gallery"];

export default function DesktopLanding({ pathname, projectIdFromRoute }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
    gallery: useRef(null),
  };
  const projectRefs = useRef({});

  const projects = useMemo(() => projectDetailData.projectDetail, []);

  const registerProjectRef = (id, node) => {
    if (node) {
      projectRefs.current[id] = node;
    } else {
      delete projectRefs.current[id];
    }
  };

  const scrollToSection = (sectionId, behavior = "smooth") => {
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior,
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.dataset.section);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.55],
        rootMargin: "-12% 0px -45% 0px",
      }
    );

    sectionOrder.forEach((sectionId) => {
      const node = sectionRefs[sectionId].current;
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (projectIdFromRoute) {
      const project = projects.find((item) => item.id === projectIdFromRoute);
      if (!project) {
        navigate("/", { replace: true });
        return;
      }

      setActiveSection("portfolio");
      scrollToSection("portfolio", "smooth");

      const timeout = window.setTimeout(() => {
        projectRefs.current[project.id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setSelectedProject(project);
      }, 380);

      return () => window.clearTimeout(timeout);
    }

    setSelectedProject(null);

    if (pathname === "/experience") {
      scrollToSection("experience", "auto");
      return;
    }
    if (pathname === "/contact") {
      scrollToSection("contact", "auto");
      return;
    }
    if (pathname === "/gallery") {
      scrollToSection("gallery", "auto");
      return;
    }
    if (pathname === "/portfolio") {
      scrollToSection("portfolio", "auto");
      return;
    }
    if (pathname === "/about" || pathname === "/") {
      scrollToSection("about", "auto");
    }
  }, [navigate, pathname, projectIdFromRoute, projects]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const handleNavClick = (sectionId) => {
    navigate(sectionId === "about" ? "/" : `/${sectionId}`);
    scrollToSection(sectionId, "smooth");
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="px-6 py-10">
      <div className="mx-auto flex max-w-[1440px] items-start gap-10">
        <aside className="sticky top-10 w-72 shrink-0 self-start rounded-2xl bg-[#1E1E1E] p-6 shadow-lg">
          <Sidebar />
        </aside>

        <main className="min-w-0 flex-1 rounded-[28px] bg-[#2A2A2A] px-8 py-8 shadow-lg xl:px-12">
          <div className="sticky top-0 z-20 -mx-8 mb-8 bg-[#2A2A2A]/95 px-8 pb-6 pt-2 backdrop-blur xl:-mx-12 xl:px-12">
            <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
          </div>

          <div className="space-y-16 xl:space-y-24">
            <section ref={sectionRefs.about} data-section="about">
              <Hero />
            </section>

            <section ref={sectionRefs.experience} data-section="experience">
              <Experience />
            </section>

            <section ref={sectionRefs.portfolio} data-section="portfolio">
              <Projects
                featuredProjects={projects}
                onProjectClick={handleProjectClick}
                registerProjectRef={registerProjectRef}
              />
            </section>

            <section ref={sectionRefs.contact} data-section="contact">
              <Contact />
            </section>

            <section ref={sectionRefs.gallery} data-section="gallery">
              <Gallery />
            </section>
          </div>

          <footer className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 TuanHannciD | All Rights Reserved</p>
          </footer>
        </main>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
