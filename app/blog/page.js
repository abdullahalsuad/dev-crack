import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111] text-white text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🚧 Coming Soon</h1>
        <p className="text-lg mb-6">
          We are working hard to launch something amazing. Stay tuned!
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} The DEV Crack Team
        </p>
      </div>
    </div>
  );
}
