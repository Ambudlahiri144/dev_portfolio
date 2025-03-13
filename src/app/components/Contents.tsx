'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../globals.css';

// Custom cycling component for phrases
const CyclingPhrase: React.FC = () => {
  const phrases: string[] = ['App Developer', 'Web Developer', 'ML Engineer'];
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      // After fade-out, update the phrase and fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 500); // 500ms for fade out duration
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {phrases[index]}
    </span>
  );
};

const Contents: React.FC = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Left Column: Name & Description (50%) */}
      <div className="w-2/5 flex flex-col justify-center px-8 mt-25">
        <p className="uppercase text-sm font-semibold font-montserrat tracking-widest text-[#2c2725] mb-3">
          Ambud Lahiri
        </p>
        <p className="text-lg font-lugrasimo font-light text-[#2c2725] max-w-md leading-relaxed">
          <span className="font-bold">{/* Use our CyclingPhrase component */} 
            <CyclingPhrase />
          </span>
        </p>
        <p className="text-sm font-montserrat font-light text-[#2c2725] max-w-md leading-relaxed">
        Transforming ideas into immersive digital realities.
        </p>
      </div>

      {/* Right Column: Large Navigation Buttons (50%) */}
      <div className="w-3/5 flex flex-col justify-center items-start pr-4 tracking-widest space-y-1 font-bodoni font-bold leading-relaxed">
        <Link
          href="/work"
          className="link text-[135px] text-[#2c2725]  transition-transform duration-300 hover:-skew-x-6"
        >
          <span>WORK</span>
        </Link>
        <Link
          href="/about"
          className="link text-[135px] text-[#2c2725] transition-transform duration-300 hover:-skew-x-6"  
        >
          <span>ABOUT</span>
        </Link>
        <Link
          href="/contact"
          className="link text-[135px] text-[#2c2725] transition-transform duration-300 hover:-skew-x-6"
        >
          <span>CONTACT</span>
        </Link>
      </div>
    </div>
  );
};

export default Contents;
