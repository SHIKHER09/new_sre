import React from 'react';
import { Cloud, Code } from 'lucide-react';
import SkillBar from '../ui/SkillBar';

const SkillsSection = () => {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="flex gap-2 items-center mb-8">
                <span className="text-green-400">➜</span>
                <span className="text-cyber-cyan">~</span>
                <span className="text-slate-200">ls ./skills</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Infrastructure Layer */}
                <div className="relative p-6 border border-slate-800 rounded-lg bg-slate-900/30 backdrop-blur-sm group hover:border-cyber-cyan/50 transition-colors">
                    <div className="absolute -top-3 left-4 px-2 bg-void-black text-cyber-cyan text-sm font-bold flex items-center gap-2">
                        <Cloud className="w-4 h-4" /> INFRASTRUCTURE LAYER
                    </div>
                    <div className="space-y-4">
                        {['Kubernetes', 'Terraform', 'AWS/GCP', 'Docker', 'CI/CD Pipelines', 'Prometheus'].map((skill) => (
                            <SkillBar key={skill} skill={skill} colorClass="bg-cyber-cyan" shadowColor="rgba(6,182,212,0.5)" />
                        ))}
                    </div>
                </div>

                {/* Application Layer */}
                <div className="relative p-6 border border-slate-800 rounded-lg bg-slate-900/30 backdrop-blur-sm group hover:border-neon-purple/50 transition-colors">
                    <div className="absolute -top-3 left-4 px-2 bg-void-black text-neon-purple text-sm font-bold flex items-center gap-2">
                        <Code className="w-4 h-4" /> APPLICATION LAYER
                    </div>
                    <div className="space-y-4">
                        {['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'GraphQL'].map((skill) => (
                            <SkillBar key={skill} skill={skill} colorClass="bg-neon-purple" shadowColor="rgba(168,85,247,0.5)" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
