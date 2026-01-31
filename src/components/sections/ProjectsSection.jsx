import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
    return (
        <section id="projects" className="scroll-mt-24">
            <div className="flex gap-2 items-center mb-8">
                <span className="text-green-400">➜</span>
                <span className="text-cyber-cyan">~</span>
                <span className="text-slate-200">./view_projects.sh</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((project) => (
                    <div
                        key={project}
                        className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300"
                    >
                        <div className="h-48 bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                            <Terminal className="w-12 h-12 text-slate-600 group-hover:text-cyber-cyan transition-colors" />
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyber-cyan transition-colors">
                                Project Alpha {project}
                            </h3>
                            <p className="text-slate-400 text-sm">
                                A high-availability microservices architecture visualizer built with React and Go.
                            </p>
                            <div className="flex gap-2 pt-2">
                                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-cyber-cyan">React</span>
                                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-neon-purple">Go</span>
                                <span className="px-2 py-1 bg-slate-800 rounded text-xs text-emerald-400">K8s</span>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-5 h-5 text-slate-200 hover:text-cyber-cyan cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
