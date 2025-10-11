const photos = [
  { id: 1, title: "Myself", src: "/img1.jpg" },
  { id: 2, title: "Tide Trails", src: "/img2.jpg" },
  { id: 3, title: "Wings in Motion", src: "/img3.jpg" },
  { id: 4, title: "Spiritual Moments", src: "/img4.jpg" },
  { id: 5, title: "Flora & Peace", src: "/img5.jpg" },
  { id: 6, title: "Bites & Plates", src: "/img6.jpg" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mt-8 lg:mt-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
        Pixels & Passion
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative rounded-xl overflow-hidden shadow-lg hover:ring-2 hover:ring-blue-400 transition group"
          >
            <div className="h-48 lg:h-56 bg-gray-600 flex items-center justify-center">
              <div className="text-gray-400 text-sm">{photo.title}</div>
            </div>
            <div className="absolute bottom-2 left-2 text-white font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
              {photo.title}
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
                <i className="fas fa-expand"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 lg:mt-8 text-center text-gray-400 text-sm">
        <p>Use ← and → keys to navigate</p>
      </div>
    </section>
  );
}
