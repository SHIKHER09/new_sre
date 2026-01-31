import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="scroll-mt-24 mb-24">
            <div className="flex gap-2 items-center mb-8">
                <span className="text-green-400">➜</span>
                <span className="text-cyber-cyan">~</span>
                <span className="text-slate-200">ssh user@contact</span>
            </div>

            <div className="max-w-2xl mx-auto bg-slate-900/80 border border-slate-800 rounded-lg p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-mono text-sm text-green-400">SECURE CONNECTION ESTABLISHED</span>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-500 uppercase">Target Identity</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-slate-200 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all font-mono"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-500 uppercase">Payload</label>
                        <textarea
                            rows="4"
                            placeholder="Enter message payload..."
                            className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-slate-200 focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all font-mono"
                        ></textarea>
                    </div>
                    <button className="w-full py-4 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan font-mono hover:bg-cyber-cyan/20 hover:scale-[1.02] transition-all uppercase tracking-widest flex items-center justify-center gap-2 group">
                        <Mail className="w-4 h-4" />
                        <span>Send Transmission</span>
                        <span className="group-hover:translate-x-1 transition-transform">➜</span>
                    </button>
                </form>

                <div className="mt-8 flex justify-center gap-6">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
