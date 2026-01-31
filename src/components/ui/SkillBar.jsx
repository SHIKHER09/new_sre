import React, { useState, useEffect, useMemo } from 'react';

const SkillBar = ({ skill, colorClass, shadowColor }) => {
    const [width, setWidth] = useState(0);
    // Base target width between 70% and 95%
    const baseTarget = useMemo(() => Math.floor(Math.random() * 25 + 70), []);

    useEffect(() => {
        // Initial animation
        const timer = setTimeout(() => {
            setWidth(baseTarget);
        }, 100);

        // Continuous fluctuation
        const interval = setInterval(() => {
            // Fluctuate by +/- 5%
            const fluctuation = Math.random() * 10 - 5;
            const newWidth = Math.min(100, Math.max(0, baseTarget + fluctuation));
            setWidth(newWidth);
        }, 1500); // Update every 1.5 seconds

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [baseTarget]);

    return (
        <div className="flex items-center gap-3">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                    className={`h-full ${colorClass} transition-all duration-[1500ms] ease-in-out`}
                    style={{
                        width: `${width}%`,
                        boxShadow: `0 0 10px ${shadowColor}`
                    }}
                ></div>
            </div>
            <span className="font-mono text-sm text-slate-400 w-32 text-right">{skill}</span>
        </div>
    );
};

export default SkillBar;
