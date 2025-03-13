'use client';
import type { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Project {
  title: string;
  subtitle: string;
  href: string;
}

const projects: Project[] = [
  { title: 'Harmonix', subtitle: 'Music & Video Streaming App', href: 'https://github.com/Ambudlahiri144/Music_player.git' },
  { title: 'Bail Reckoner', subtitle: 'Legal Assistant', href: 'https://github.com/Ambudlahiri144/Sudo_bail.git' },
  { title: 'BUGPT', subtitle: 'AI-Powered University Guide', href: 'https://github.com/Ambudlahiri144/BU-GPT.git' },
  { title: 'ChronoCraft', subtitle: 'Automatic TimeTable Generator', href: 'https://github.com/Ambudlahiri144/AutoTimeTableGenerator.git' },
];

const WorkPage: FC = () => {
  const [hideOverlay, setHideOverlay] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string>('/');
  const router = useRouter();

  // Hide the overlay once its animation ends
  const handleInitialOverlayAnimationEnd = () => {
    setHideOverlay(true);
  };

  // Navigate when the slide-down overlay finishes its animation
  const handleNavOverlayAnimationEnd = () => {
    router.push(targetRoute);
  };

  // Generic click handler for sidebar links
  const handleRouteClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    e.preventDefault();
    setTargetRoute(route);
    setIsNavigating(true);
  };

  return (
    <>
      {/* Slide-Up Overlay on Page Load */}
      {!hideOverlay && (
        <div
          className="fixed inset-0 bg-[#f5ebe1] z-50 animate-slide-up-overlay"
          onAnimationEnd={handleInitialOverlayAnimationEnd}
        />
      )}
      {/* Slide-Down Overlay when Navigating */}
      {isNavigating && (
        <div
          className="fixed inset-0 bg-[#f5ebe1] z-50 animate-slide-down-overlay"
          onAnimationEnd={handleNavOverlayAnimationEnd}
        />
      )}

      <main className="min-h-screen flex">
        {/* Fixed Left Side */}
        <div className="fixed left-0 top-0 bottom-0 w-[40%] bg-[#2c2725] text-[#f5ebe1]">
          <div className="flex h-full">
            {/* Left Sidebar Buttons */}
            <div className="w-[5%] flex flex-col justify-between items-center py-12 px-10 text-sm">
              <div className="flex flex-col justify-center items-center space-y-16">
                <Link
                  href="/"
                  onClick={(e) => handleRouteClick(e, '/')}
                  className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  onClick={(e) => handleRouteClick(e, '/about')}
                  className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
                >
                  ABOUT
                </Link>
                <Link
                  href="/contact"
                  onClick={(e) => handleRouteClick(e, '/contact')}
                  className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
                >
                  CONTACT
                </Link>
                
              </div>
              <div className="flex flex-col items-center space-y-4 mt-8">
                <span className="text-[12px] transform rotate-90 tracking-wider font-medium">
                  ©
                </span>
                <span className="text-[12px] transform rotate-90 tracking-wider font-medium">
                  2024
                </span>
              </div>
            </div>

            {/* Left Column Text */}
            <div className="flex flex-col justify-end space-y-4 ml-[5%] mt-[20%] pb-40 animate-fade-in-slide-up">
              <p className="uppercase text-sm font-lugrasimo font-semibold tracking-widest text-[#f5ebe1]-700">
                WORK
              </p>
              <p className="text-base font-montserrat font-light text-[#f5ebe1]-50 max-w-md leading-relaxed">
                During my engineering college experience, I focused on AI, web development,
                Flutter, and software projects—developing intelligent systems, interactive web
                apps, and responsive mobile solutions. These hands-on projects enhanced my coding
                skills, agile mindset, and adaptability in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Right Side */}
        <div className="ml-[40%] flex-1 bg-[#2c2725] text-[#f5ebe1] overflow-y-auto">
          <div className="flex flex-col mr-[20%] font-bodoni justify-center items-end pr-10 animate-fade-in-slide-up mt-20">
            {projects.map((project, index) => (
              <Link key={index} href={project.href} className="block">
                <div className="grid grid-cols-2 mt-[20%] items-end ml-20 pb-10">
                  <span className="text-[90px] uppercase text-left transition-transform duration-300 hover:-skew-x-6 font-bold m-0 pr-20 leading-none">
                    {project.title}
                  </span>
                  <br />
                  <span className="text-sm text-left m-0 p-0 leading-none">
                    -{project.subtitle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default WorkPage;
