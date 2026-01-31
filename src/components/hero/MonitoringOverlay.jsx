import React, { useState, useEffect } from 'react';
import { Activity, Server, Shield, Globe, Cpu, Wifi } from 'lucide-react';

const MonitoringOverlay = () => {
    const [metrics, setMetrics] = useState({
        rps: 1240,
        latency: 45,
        uptime: 99.999,
        nodes: 84
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                rps: prev.rps + Math.floor(Math.random() * 20 - 10),
                latency: Math.max(20, prev.latency + Math.floor(Math.random() * 10 - 5)),
                uptime: prev.uptime,
                nodes: prev.nodes
            }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Top Left - System Stats */}
            <div className="absolute top-8 left-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-800/50">
                    <Activity className="w-5 h-5 text-green-400 animate-pulse" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Requests/Sec</span>
                        <span className="text-lg font-mono text-green-400 font-bold">{metrics.rps.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-800/50">
                    <Wifi className="w-5 h-5 text-cyber-cyan" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Global Latency</span>
                        <span className="text-lg font-mono text-cyber-cyan font-bold">{metrics.latency}ms</span>
                    </div>
                </div>
            </div>

            {/* Top Right - Infrastructure Status */}
            <div className="absolute top-8 right-8 flex flex-col gap-4 text-right">
                <div className="flex items-center justify-end gap-3 bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-800/50">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Active Nodes</span>
                        <span className="text-lg font-mono text-neon-purple font-bold">{metrics.nodes} / 100</span>
                    </div>
                    <Server className="w-5 h-5 text-neon-purple" />
                </div>
                <div className="flex items-center justify-end gap-3 bg-slate-900/50 backdrop-blur-md p-3 rounded-lg border border-slate-800/50">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">System Uptime</span>
                        <span className="text-lg font-mono text-emerald-400 font-bold">{metrics.uptime}%</span>
                    </div>
                    <Shield className="w-5 h-5 text-emerald-400" />
                </div>
            </div>

            {/* Bottom Left - Coordinates */}
            <div className="absolute bottom-8 left-8 hidden md:block">
                <div className="font-mono text-xs text-slate-600 space-y-1">
                    <div>LAT: 37.7749° N</div>
                    <div>LNG: 122.4194° W</div>
                    <div className="text-cyber-cyan animate-pulse">STATUS: MONITORING_ACTIVE</div>
                </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute top-1/2 left-0 w-12 h-[1px] bg-slate-800/50"></div>
            <div className="absolute top-1/2 right-0 w-12 h-[1px] bg-slate-800/50"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-12 bg-slate-800/50"></div>
            <div className="absolute left-1/2 bottom-0 w-[1px] h-12 bg-slate-800/50"></div>
        </div>
    );
};

export default MonitoringOverlay;
