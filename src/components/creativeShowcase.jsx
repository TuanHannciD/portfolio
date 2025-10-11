export default function CreativeShowcase() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">Creative Showcase</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Web Development", description: "Modern, responsive web applications", icon: "fas fa-laptop-code" },
          { title: "Mobile Apps", description: "Cross-platform mobile solutions", icon: "fas fa-mobile-alt" },
          { title: "Cloud Solutions", description: "Scalable cloud infrastructure", icon: "fas fa-cloud" },
          { title: "UI/UX Design", description: "User-centered design approach", icon: "fas fa-palette" },
          { title: "Data Analytics", description: "Insights from complex datasets", icon: "fas fa-chart-line" },
          { title: "Open Source", description: "Contributing to the community", icon: "fas fa-code-branch" }
        ].map((item, index) => (
          <div key={index} className="bg-[#2A2A2A] p-6 rounded-xl hover:bg-[#3A3A3A] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <i className={`${item.icon} text-blue-400 text-xl`}></i>
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
