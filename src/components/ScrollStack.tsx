import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star, Zap, Heart, Globe, Sparkles } from 'lucide-react';
import { WavyBackground } from './wavy-background.jsx';
import HomeHero from './HomeHero.jsx';
import HomeSec2 from './HomeSec2.jsx';
import HomeSec3 from './HomeSec3.jsx';
import HomeSec4 from './HomeSec4.jsx';
import TeamSection from './TeamSection.jsx';
import Footer from './Footer.jsx';


const ScrollStack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getSectionTransform = (index: number) => {
        const sectionHeight = window.innerHeight;
        // 6 sections total => multiplier is sections-1 = 5
        const totalScrollableHeight = 5 * sectionHeight;
        const scrollProgress = Math.min(scrollY / totalScrollableHeight, 1);
        const sectionProgress = scrollProgress * 5;
        const translateY = Math.max(0, (index - sectionProgress) * 100);
        return `translateY(${translateY}vh)`;
    };

    return (
        <div ref={containerRef} className="relative">
            {/* Set total scrollable height */}
            <div style={{ height: `${6 * 100}vh` }} />

            {/* Section 1 - Hero */}
            <div
                className="fixed top-0 left-0 w-full h-screen overflow-hidden"
                style={{
                    transform: getSectionTransform(0),
                    zIndex: 1,
                }}
            >
             
                    <HomeHero></HomeHero>
              
            </div>
            {/* Section 2 - Innovation */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden"
                style={{
                    transform: getSectionTransform(1),
                    zIndex: 2,
                }}
            >
                <HomeSec2></HomeSec2>
            </div>

            {/* Section 3 - Web Development */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden pt-20"
                style={{
                    transform: getSectionTransform(2),
                    zIndex: 3,
                }}
            >
                <HomeSec3></HomeSec3>
            </div>

            {/* Section 4 - Mobile Development */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden"
                style={{
                    transform: getSectionTransform(3),
                    zIndex: 4,
                }}
            >
                <HomeSec4></HomeSec4>
            </div>

            {/* Section 5 - Team */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden"
                style={{
                    transform: getSectionTransform(4),
                    zIndex: 5,
                }}
            >
                <TeamSection></TeamSection>
            </div>

            {/* Section 6 - Footer (Contact) */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(5),
                    zIndex: 6,
                }}
            >
                <Footer></Footer>
            </div>

            {/* Regular content sections */}
            <div className="relative z-10 bg-white">

            </div>

            <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(360deg); }
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default ScrollStack;