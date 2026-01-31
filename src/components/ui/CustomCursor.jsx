import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;
        let animationFrameId;
        let moveTimeout;

        let mouseX = 0;
        let mouseY = 0;
        let trailerX = 0;
        let trailerY = 0;
        let prevMouseX = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isVisible) setIsVisible(true);
            setIsMoving(true);

            // Determine direction
            if (mouseX > prevMouseX + 2) setDirection(1);
            else if (mouseX < prevMouseX - 2) setDirection(-1);
            prevMouseX = mouseX;

            // Reset moving state when stopped
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => setIsMoving(false), 100);

            // Immediate update for the main bone
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        // Smooth trailing animation loop
        const animate = () => {
            // Lerp (Linear Interpolation) for smooth trailing
            trailerX += (mouseX - trailerX) * 0.1;
            trailerY += (mouseY - trailerY) * 0.1;

            if (trailer) {
                trailer.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(moveTimeout);
        };
    }, [isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <>
            {/* Main Cursor (Bone) */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 text-lg pointer-events-none z-[100] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ marginTop: '-12px', marginLeft: '-12px' }}
            >
                🦴
            </div>

            {/* Trailer (Animated White Puppy) */}
            <div
                ref={trailerRef}
                className={`fixed top-0 left-0 pointer-events-none z-[99] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    marginTop: '-25px',
                    marginLeft: '-25px',
                    width: '50px',
                    height: '50px'
                }}
            >
                <div
                    className="w-full h-full transition-transform duration-100"
                    style={{
                        transform: `scaleX(${direction})`,
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                        {/* Legs Group - Animated when moving */}
                        <g className={isMoving ? "animate-run-legs" : ""}>
                            {/* Back Left Leg */}
                            <path d="M30 70 L25 85" stroke="white" strokeWidth="6" strokeLinecap="round" className="origin-[30px_70px] animate-[leg-swing_0.2s_infinite_alternate]" style={{ animationPlayState: isMoving ? 'running' : 'paused', animationDelay: '0.1s' }} />
                            {/* Front Left Leg */}
                            <path d="M70 70 L75 85" stroke="white" strokeWidth="6" strokeLinecap="round" className="origin-[70px_70px] animate-[leg-swing_0.2s_infinite_alternate]" style={{ animationPlayState: isMoving ? 'running' : 'paused', animationDelay: '0.1s' }} />
                            {/* Back Right Leg */}
                            <path d="M35 70 L30 85" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" className="origin-[35px_70px] animate-[leg-swing_0.2s_infinite_alternate]" style={{ animationPlayState: isMoving ? 'running' : 'paused' }} />
                            {/* Front Right Leg */}
                            <path d="M65 70 L70 85" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" className="origin-[65px_70px] animate-[leg-swing_0.2s_infinite_alternate]" style={{ animationPlayState: isMoving ? 'running' : 'paused' }} />
                        </g>

                        {/* Body */}
                        <ellipse cx="50" cy="60" rx="30" ry="20" fill="white" />

                        {/* Head */}
                        <circle cx="75" cy="45" r="20" fill="white" />

                        {/* Ears */}
                        <ellipse cx="65" cy="35" rx="8" ry="15" fill="white" transform="rotate(-20 65 35)" />
                        <ellipse cx="85" cy="35" rx="8" ry="15" fill="white" transform="rotate(20 85 35)" />

                        {/* Face */}
                        <circle cx="70" cy="42" r="2" fill="#1e293b" /> {/* Eye */}
                        <circle cx="80" cy="42" r="2" fill="#1e293b" /> {/* Eye */}
                        <circle cx="75" cy="48" r="3" fill="#1e293b" /> {/* Nose */}
                        <path d="M72 52 Q75 55 78 52" stroke="#1e293b" strokeWidth="1.5" fill="none" /> {/* Mouth */}

                        {/* Tail - Animated */}
                        <path d="M20 55 Q10 45 15 35" stroke="white" strokeWidth="6" strokeLinecap="round" className="origin-[20px_55px] animate-[tail-wag_0.2s_infinite_alternate]" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default CustomCursor;
