import { useState, useEffect } from "react";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 giây
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] z-50">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
