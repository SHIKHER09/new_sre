import React from 'react';

const CyberGrid = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Perspective Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 90%, transparent)'
                }}
            ></div>

            {/* Moving Horizontal Lines (Time Flow) */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.2)_2px,transparent_4px)] bg-[size:100%_100px] animate-scan"></div>
            </div>

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-void-black via-transparent to-void-black"></div>
        </div>
    );
};

export default CyberGrid;
