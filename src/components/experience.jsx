import experienceData from "../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="fade-in scroll-mt-28">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Experience
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-400 lg:text-lg">
          Real-world delivery in production-facing environments.
        </p>
      </div>

      <div className="space-y-6">
        {experienceData.experience.map((item) => (
          <article
            key={item.id}
            className="rounded-[24px] border border-white/6 bg-[#202020] p-6 shadow-lg lg:p-8"
          >
            <div className="space-y-5 text-gray-200">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
                  {item.company}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white lg:text-3xl">
                  {item.role}
                </h3>
              </div>

              <div className="space-y-3 text-base leading-relaxed text-gray-300 lg:text-lg">
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {item.duration}
                </p>
                <p>
                  <span className="font-semibold text-white">Project:</span>{" "}
                  {item.project}
                </p>
                <p>
                  <span className="font-semibold text-white">Tech stack:</span>{" "}
                  {item.techStack}
                </p>
              </div>

              <ul className="space-y-3 pl-5 text-base leading-relaxed text-gray-300 marker:text-gray-400 lg:text-lg">
                {item.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
