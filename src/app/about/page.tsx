'use client';
import type { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AboutPage: FC = () => {
  // For the initial slide-up overlay
  const [hideOverlay, setHideOverlay] = useState(false);
  // For the sidebar link slide-down overlay
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  // Called when the initial overlay finishes sliding up
  const handleInitialOverlayAnimationEnd = () => {
    setHideOverlay(true);
  };

  // Called when the slide-down overlay finishes its animation
  const handleNavOverlayAnimationEnd = () => {
    router.push('/');
  };

  // Intercept HOME link click to show slide-down overlay
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsNavigating(true);
  };

  return (
    <>
      {/* Slide-Up Overlay on Page Load */}
      {!hideOverlay && (
        <div
          className="fixed inset-0 bg-[#2c2725] z-50 animate-slide-up-overlay"
          onAnimationEnd={handleInitialOverlayAnimationEnd}
        />
      )}
      {/* Slide-Down Overlay when Navigating Home */}
      {isNavigating && (
        <div
          className="fixed inset-0 bg-[#2c2725] z-50 animate-slide-down-overlay"
          onAnimationEnd={handleNavOverlayAnimationEnd}
        />
      )}

      <main className="min-h-screen flex">
        {/* Fixed Sidebar (non-scrollable) */}
        <div className="fixed left-0 top-0 h-screen w-[5%] flex flex-col justify-between items-center py-12 px-10 text-sm">
          <div className="flex flex-col justify-center items-center space-y-12">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-[11px] transform rotate-90 tracking-[0.3em] font-medium cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/work"
              onClick={(e) => {
                e.preventDefault();
                router.push('/work');
              }}
              className="text-[11px] transform rotate-90 tracking-[0.3em] font-medium cursor-pointer"
            >
              WORK
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

        {/* Main Content offset by the sidebar */}
        <div className="flex-1 ml-[5%] flex flex-row">
          {/* Left Column: Text (60%) */}
          <div className="w-3/5 p-8 flex flex-col justify-center">
            <div className="mx-auto">
              <h1 className="font-bodoni font-bold text-[150px] md:text-[150px] animate-pop-out-delayed tracking-[0.2em] mt-20 text-center">
                ABOUT
              </h1>
              <p className="font-bodoni font-semibold text-[30px] md:text-[35px] text-[#2c2725] mb-0 leading-tight tracking-[0.05em] text-center">
                I&apos;m Ambud. ML Engineer.
              </p>
              <p className="font-bodoni font-semibold text-[30px] text-[#2c2725] mb-5 leading-relaxed tracking-[0.05em] text-center">
                Web Developer. App Developer.
              </p>
              <p className="font-montserrat font-light text-[15px] md:text-[15px] text-[#f5ebe1]-50 mb-6 tracking-wide">
                Currently I&apos;m pursuing B.Tech in Computer Science and Engineering at Bennett University.
                I specialize in Artificial Intelligence and Machine Learning. Along with this I have learnt
                Web Development and App Development using frameworks like React.js, Next.js, and Flutter respectively.
                I love exploring new opportunities and challenges and also contributing to Open Source Projects.
              </p>
            </div>
            <div className="text-[#2c2725]-300 leading-relaxed mb-6">
              <h2 className="font-bodoni text-xl font-semibold mb-4 tracking-widest">
                EXPERIENCE
              </h2>
              <div className="ml-8">
                <p className="font-montserrat text-[15px] md:text-[15px] mb-4 font-semibold">
                  Industrial Experience:
                </p>
                <ul className="font-montserrat text-[15px] md:text-[15px] list-none ml-5 space-y-1">
                  <li>- 3 years experience in App Development</li>
                  <li>- 2 years experience in Web Development</li>
                  <li>- 3 years experience in Machine Learning</li>
                  <li>- 2 years industry experience in Product Management at Syntalix</li>
                </ul>
              </div>
            </div>
            <div className="text-[#2c2725]-300 leading-relaxed mb-6">
              <h2 className="font-bodoni text-xl font-semibold mb-4 tracking-widest">
                SKILLS
              </h2>
              <div className="ml-8">
                <div className="grid grid-cols-6 gap-4">
                  <img src="/images/c++.png" alt="C++" className="w-16 h-16 object-cover" />
                  <img src="/images/python.png" alt="Python" className="w-16 h-16 object-cover" />
                  <img src="/images/java.png" alt="Java" className="w-16 h-16 object-cover" />
                  <img src="/images/react.png" alt="React" className="w-16 h-16 object-cover" />
                  <img src="/images/html.png" alt="HTML" className="w-16 h-16 object-cover" />
                  <img src="/images/js.png" alt="JavaScript" className="w-16 h-16 object-cover" />
                  <img src="/images/tailwind.png" alt="Tailwind" className="w-16 h-16 object-cover" />
                  <img src="/images/nextjs.png" alt="Next.js" className="w-16 h-16 object-cover" />
                  <img src="/images/typescript.png" alt="TypeScript" className="w-16 h-16 object-cover" />
                  <img src="/images/flutter.png" alt="Flutter" className="w-16 h-16 object-cover" />
                  <img src="/images/dart.png" alt="Dart" className="w-16 h-16 object-cover" />
                  <img src="/images/tensorflow.png" alt="TensorFlow" className="w-16 h-16 object-cover" />
                  <img src="/images/qt.png" alt="Qt" className="w-16 h-16 object-cover" />
                  <img src="/images/git.png" alt="Git" className="w-16 h-16 object-cover" />
                  <img src="/images/sql.png" alt="SQL" className="w-16 h-16 object-cover" />
                  <img src="/images/mongo.png" alt="Mongo" className="w-16 h-16 object-cover" />
                  <img src="/images/fire.png" alt="Firebase" className="w-16 h-16 object-cover" />
                  <img src="/images/astudio.png" alt="Audio Studio" className="w-16 h-16 object-cover" />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/pdf/Resume_SoftwareDev.pdf"
                  download
                  className="inline-block bg-[#2c2725] text-[#f5ebe1] font-bodoni font-bold rounded-full px-12 py-3 text-lg transition-all duration-300 tracking-widest hover:px-20 mb-8"
                >
                  My CV
                </a>
              </div>
              <div className="text-[#2c2725]-300 leading-relaxed mb-6">
                <h2 className="font-bodoni text-xl font-semibold mb-4 tracking-widest">
                  CONTACT
                </h2>
                <p className="font-montserrat font-light text-[15px] md:text-[15px] text-[#f5ebe1]-50 mb-6 tracking-wide">
                  Wanna Collaborate? Have any questions? Feel free to reach out to me.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#2c2725] text-[#f5ebe1] font-bodoni font-bold rounded-full px-12 py-3 text-lg transition-all duration-300 tracking-widest hover:px-20"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image (40%) */}
          <div className="w-2/5 p-10 flex items-start justify-center">
            <img
              src="/images/photo.jpg"
              alt="About Image"
              className="object-cover w-auto h-[450px] animate-fade-in-slide-up"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
