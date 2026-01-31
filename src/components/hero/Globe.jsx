import React, { useState, useEffect, useMemo } from 'react';
import { Terminal, Server, Cloud, Database, ChevronDown } from 'lucide-react';
import Typewriter from '../ui/Typewriter';

const Globe = ({ onEnter, isExiting }) => {
    const [rotation, setRotation] = useState(0);

    const GLOBE_RADIUS = 120;
    const DOT_COUNT = 200;

    const dots = useMemo(() => {
        const points = [];
        const phi = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < DOT_COUNT; i++) {
            const y = 1 - (i / (DOT_COUNT - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            points.push({ x: x * GLOBE_RADIUS, y: y * GLOBE_RADIUS, z: z * GLOBE_RADIUS });
        }
        return points;
    }, []);

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setRotation(prev => (prev + 0.002) % (Math.PI * 2));
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const project = (x, y, z, angle) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rotatedX = x * cos - z * sin;
        const rotatedZ = x * sin + z * cos;
        const scale = 300 / (300 - rotatedZ);
        const alpha = (rotatedZ + GLOBE_RADIUS) / (2 * GLOBE_RADIUS);
        return {
            x: rotatedX * scale,
            y: y * scale,
            scale: scale,
            alpha: Math.max(0.1, alpha),
            zIndex: Math.floor(rotatedZ)
        };
    };

    return (
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out z-10 ${isExiting ? 'opacity-0 scale-[3] pointer-events-none' : 'opacity-100 scale-100'
                }`}
        >
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {/* Globe Dots */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {dots.map((dot, i) => {
                        const { x, y, scale, alpha, zIndex } = project(dot.x, dot.y, dot.z, rotation);
                        return (
                            <div
                                key={i}
                                className="absolute rounded-full bg-cyber-cyan transition-transform duration-75"
                                style={{
                                    width: '3px',
                                    height: '3px',
                                    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                                    opacity: alpha,
                                    zIndex: zIndex,
                                    boxShadow: alpha > 0.8 ? '0 0 4px rgba(6, 182, 212, 0.8)' : 'none'
                                }}
                            />
                        );
                    })}
                </div>

                {/* Orbiting Icons */}
                {[
                    { Icon: Cloud, color: 'text-cyber-cyan', offset: 0, label: 'INFRA' },
                    { Icon: Database, color: 'text-neon-purple', offset: (Math.PI * 2) / 3, label: 'DB' },
                    { Icon: Server, color: 'text-emerald-400', offset: (Math.PI * 4) / 3, label: 'COMPUTE' }
                ].map((item, i) => {
                    const orbitX = Math.cos(rotation * 0.5 + item.offset) * 200;
                    const orbitZ = Math.sin(rotation * 0.5 + item.offset) * 200;
                    const proj = project(orbitX, Math.sin(rotation + i) * 50, orbitZ, 0);

                    return (
                        <div
                            key={i}
                            className={`absolute flex flex-col items-center gap-1 transition-transform duration-75 ${item.color}`}
                            style={{
                                transform: `translate3d(${proj.x}px, ${proj.y}px, 0) scale(${proj.scale})`,
                                opacity: proj.alpha,
                                zIndex: proj.zIndex + 100
                            }}
                        >
                            <item.Icon className="w-8 h-8 drop-shadow-[0_0_10px_currentColor]" />
                            <span className="text-[10px] font-mono font-bold tracking-widest bg-slate-950/80 px-1 rounded border border-slate-800/50 backdrop-blur-sm">
                                {item.label}
                            </span>
                        </div>
                    );
                })}

                {/* Central Core Glow */}
                <div className="absolute w-32 h-32 bg-cyber-cyan/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-4 z-20">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-neon-purple drop-shadow-lg text-center h-24 md:h-32 flex flex-col justify-center">
                    <Typewriter text="GLOBAL" speed={150} cursor={false} />
                    <Typewriter text="INFRASTRUCTURE" speed={100} delay={1000} cursor={false} />
                </h1>
                <div className="text-slate-400 text-lg tracking-[0.3em] uppercase h-8">
                    <Typewriter text="System Status: Operational" speed={50} delay={2500} />
                </div>
                <button
                    onClick={onEnter}
                    className="mt-8 px-8 py-3 bg-slate-900/50 border border-cyber-cyan/50 rounded-full text-cyber-cyan hover:bg-cyber-cyan/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm group flex items-center gap-2"
                >
                    <Terminal className="w-5 h-5" />
                    <span>INITIALIZE TERMINAL</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Globe;
