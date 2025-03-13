// src/app/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-[5%] h-screen flex flex-col py-12 px-10 text-gray-600 text-sm">
      {/* Top Section: Social Links */}
      <div className="flex flex-col items-center space-y-10">
        <a
          href="https://www.instagram.com/ambudlahiri_004/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transform rotate-90 tracking-wider font-medium"
        >
          IG
        </a>
        <a
          href="https://github.com/Ambudlahiri144"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transform rotate-90 tracking-wider font-medium"
        >
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/ambud-lahiri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transform rotate-90 tracking-wider font-medium"
        >
          LI
        </a>
      </div>

      {/* Flex Spacer pushes bottom section down */}
      <div className="flex-1" />

      {/* Bottom Section: Year */}
      <div className="flex flex-col items-center space-y-4">
        <span className="transform rotate-90 tracking-wider font-medium">©</span>
        <span className="transform rotate-90 tracking-wider font-medium">2024</span>
      </div>
    </div>
  );
};

export default Sidebar;
