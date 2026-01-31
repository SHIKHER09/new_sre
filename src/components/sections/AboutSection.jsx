import React from 'react';
import { Shield, Zap } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="scroll-mt-24">
            <div className="font-mono text-lg space-y-4">
                <div className="flex gap-2 items-center">
                    <span className="text-green-400">➜</span>
                    <span className="text-cyber-cyan">~</span>
                    <span className="text-slate-200">whoami</span>
                </div>
                <div className="pl-6 border-l-2 border-slate-800 space-y-4 text-slate-300">
                    <p className="leading-relaxed max-w-2xl">
                        <span className="text-neon-purple font-bold">Role:</span> Site Reliability Engineer & Full Stack Developer
                    </p>
                    <p className="leading-relaxed max-w-2xl">
                        <span className="text-neon-purple font-bold">Mission:</span> Bridging the gap between global infrastructure and application code.
                        I architect resilient cloud systems (Macro) and craft performant, pixel-perfect UIs (Micro).
                    </p>
                    <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Shield className="w-4 h-4" /> 99.99% Uptime
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Zap className="w-4 h-4" /> &lt;100ms Latency
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
