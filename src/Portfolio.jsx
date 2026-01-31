import React, { useState } from 'react';
import Starfield from './components/background/Starfield';
import UniverseWaves from './components/background/UniverseWaves';
import Globe from './components/hero/Globe';
import MonitoringOverlay from './components/hero/MonitoringOverlay';
import BootSequence from './components/ui/BootSequence';
import CustomCursor from './components/ui/CustomCursor';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import BlogSection from './components/sections/BlogSection';
import MomentsSection from './components/sections/MomentsSection';
import ContactSection from './components/sections/ContactSection';

const Portfolio = () => {
    const [view, setView] = useState('macro'); // 'macro', 'boot', 'micro'

    const handleEnter = () => {
        setView('boot');
    };

    const handleBootComplete = () => {
        setView('micro');
    };

    return (
        <div className="h-screen w-full overflow-y-auto bg-void-black text-slate-200 relative selection:bg-cyber-cyan/30 selection:text-cyber-cyan cursor-none">
            <CustomCursor />
            {/* Background Effects */}
            <Starfield />
            <UniverseWaves />

            {/* MACRO VIEW: GLOBE & MONITORING */}
            {(view === 'macro' || view === 'boot') && (
                <>
                    <MonitoringOverlay />
                    <Globe onEnter={handleEnter} isExiting={view === 'boot'} />
                </>
            )}

            {/* BOOT SEQUENCE */}
            {view === 'boot' && (
                <BootSequence onComplete={handleBootComplete} />
            )}

            {/* MICRO VIEW: TERMINAL */}
            <div
                className={`absolute inset-0 overflow-y-auto z-20 ${view === 'micro'
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                {view === 'micro' && (
                    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
                        {/* Terminal Header */}
                        <header className="sticky top-4 z-50 backdrop-blur-md bg-slate-900/80 border border-slate-700/50 rounded-lg p-4 flex justify-between items-center mb-12 shadow-2xl">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="font-mono text-sm text-slate-400">user@sre-portfolio:~</span>
                            </div>
                            <nav className="hidden md:flex gap-6 text-sm font-mono">
                                <a href="#about" className="hover:text-cyber-cyan transition-colors">./about</a>
                                <a href="#skills" className="hover:text-cyber-cyan transition-colors">./skills</a>
                                <a href="#projects" className="hover:text-cyber-cyan transition-colors">./projects</a>
                                <a href="#blog" className="hover:text-cyber-cyan transition-colors">./blog</a>
                                <a href="#contact" className="hover:text-cyber-cyan transition-colors">./contact</a>
                            </nav>
                        </header>

                        <main className="flex-grow space-y-24 pb-24">
                            <AboutSection />
                            <SkillsSection />
                            <ProjectsSection />
                            <BlogSection />
                            <MomentsSection />
                            <ContactSection />
                        </main>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
