'use client';
import type { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ContactPage: FC = () => {
  const [hideOverlay, setHideOverlay] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string>('/');
  const router = useRouter();

  // Called when the initial overlay finishes sliding up
  const handleInitialOverlayAnimationEnd = () => {
    setHideOverlay(true);
  };

  // Called when the slide-down overlay finishes its animation
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
      {/* Slide-Up Overlay */}
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

      {/* Contact Page Content */}
      <main className="min-h-screen bg-[#2c2725] text-[#f5ebe1] flex flex-row">
        {/* Fixed Left Sidebar */}
        <div className="w-[5%] flex flex-col justify-between items-center py-12 px-10 text-sm">
          <div className="flex flex-col justify-center items-center space-y-12">
            <Link
              href="/"
              onClick={(e) => handleRouteClick(e, '/')}
              className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/work"
              onClick={(e) => handleRouteClick(e, '/work')}
              className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
            >
              WORK
            </Link>
            <Link
              href="/about"
              onClick={(e) => handleRouteClick(e, '/about')}
              className="text-[11px] transform rotate-90 tracking-[0.35em] font-medium cursor-pointer"
            >
              ABOUT
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-start justify-center px-8 md:px-20 space-y-8">
          {/* Heading with delayed period animation */}
          <h1 className="mb-4">
            <span className="inline-block text-7xl md:text-9xl font-lugrasimo animate-fade-in-slide-up">
              Hello
            </span>
            <span className="inline-block text-7xl md:text-9xl font-lugrasimo animate-fade-in-slide-up">
              .
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg md:text-2xl font-bodoni text-[#f5ebe1]-300 max-w-xl mb-8 leading-relaxed">
            Have any queries? Take a Cup of Coffee & Get in touch.
          </p>

          {/* Email Link */}
          <p className="mb-6 flex items-center space-x-2">
            <img
              src="/images/mail.png"
              alt="Email Icon"
              className="w-6 h-6 object-cover"
            />
            <a
              href="mailto:ambudlahiri123@gmail.com"
              className="font-montserrat hover:underline text-[#f5ebe1]-300 transition-colors"
            >
              ambudlahiri123@gmail.com
            </a>
          </p>

          {/* Social Links with Images */}
          <div className="space-y-4">
            <span className="font-montserrat text-[#f5ebe1]-400 block">On the Internet:</span>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ambud-lahiri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/linked.png"
                  alt="LinkedIn"    
                  className="w-10 h-10 object-cover"
                />
              </a>
              <a
                href="https://www.instagram.com/ambudlahiri_004/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/insta.png"
                  alt="Instagram"
                  className="w-10 h-10 object-cover"
                />
              </a>
              <a
                href="https://github.com/Ambudlahiri144"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/github.png"
                  alt="GitHub"
                  className="w-10 h-10 object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
