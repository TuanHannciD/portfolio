export default function Hero() {
  return (
    <section id="about" className="fade-in mb-8 lg:mb-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 ">
        Digital Identity
      </h1>
      <div className="text-base lg:text-lg text-gray-300 max-w-4xl leading-relaxed space-y-3 lg:space-y-4">
        <p className="ps-4 pt-4">
          I'm Tuan Do Ba, a junior .NET developer with hands-on experience in
          web application development, legacy-to-web migration, and internal
          testing support in a real business environment. I have a solid
          foundation in C#, JavaScript, SQL Server, RESTful APIs, GitHub,
          ReactJS, NodeJS, .NET Core, and .NET Framework.
        </p>
        <p className="ps-4">
          I’m currently focused on growing as a Back-end / .NET Developer while
          continuing to strengthen my understanding of full-stack development. I
          enjoy learning through real projects, improving problem-solving
          skills, and building practical applications that support real business
          needs.
        </p>
      </div>
      {/* One-column layout: Education timeline + Highlighted Skills */}
      <div className="mt-8 space-y-6">
        {/* Education - timeline style */}
        <div className="bg-[#1F1F1F] rounded-xl p-5">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-graduation-cap text-teal-400"></i>
            Education
          </h3>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-700" />
            {/* Item 1 */}
            <div className="relative pb-6">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(20,184,166,0.2)]" />
              <div className="mt-4 mb-4 ml-4">
                <h4 className="text-white font-semibold">
                  FPT Polytechnic College, Hanoi
                </h4>
                <p className="text-gray-400 text-sm">
                  Major in Software Development
                </p>
                <p className="text-teal-300 text-sm mt-1">
                  2022 — 2025 (Graduated)
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Studied technologies including C#, SQL Server, .NET Core, .NET
                  Framework. Participated in practical projects and coursework
                  following industry-oriented training.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills - more prominent */}
        <div className="rounded-xl p-5 bg-gradient-to-br from-[#242424] to-[#2E2E2E] border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-bolt text-amber-400"></i>
            Highlight Skills
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "C#",
              "JavaScript",
              "Node.js",
              ".NET Core",
              ".NET Framework",
              "ReactJS",
              "Git",
              "SQL Server",
              "RESTful API",
              "Bootstrap 5",
              "jQuery",
              "ASP.NET MVC",
              "Next.js",
              "PostgreSQL",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#3A3A3A] hover:bg-[#4A4A4A] border border-gray-600 shadow-inner shadow-black/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


