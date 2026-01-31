import React from 'react';

const MomentsSection = () => {
    return (
        <section id="moments" className="scroll-mt-24">
            <div className="flex gap-2 items-center mb-8">
                <span className="text-green-400">➜</span>
                <>
                    <span className="text-cyber-cyan">~</span>
                    <span className="text-slate-200">ls ./moments</span>
                </>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((moment) => (
                    <div
                        key={moment}
                        className="aspect-square bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden hover:scale-105 hover:z-10 hover:shadow-2xl transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <span className="font-mono text-xs text-slate-600">IMG_00{moment}.RAW</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MomentsSection;
