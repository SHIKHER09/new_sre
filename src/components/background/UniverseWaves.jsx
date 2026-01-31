import React, { useEffect, useRef } from 'react';

const UniverseWaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = 150;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: canvas.height / 2,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 0.5 + 0.2,
                    amplitude: Math.random() * 200 + 50,
                    frequency: Math.random() * 0.005 + 0.002,
                    phase: Math.random() * Math.PI * 2,
                    color: Math.random() > 0.5 ? '#06b6d4' : '#a855f7', // Cyan or Purple
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'; // Fade effect for trails
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.speed;
                // Wave motion
                p.y = (canvas.height / 2) + Math.sin(p.x * p.frequency + p.phase) * p.amplitude;

                // Wrap around screen
                if (p.x > canvas.width) {
                    p.x = 0;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
        />
    );
};

export default UniverseWaves;
