import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        const numStars = 300;
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            centerX = window.innerWidth / 2;
            centerY = window.innerHeight / 2;
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width - centerX,
                    y: Math.random() * canvas.height - centerY,
                    z: Math.random() * canvas.width
                });
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = () => {
            ctx.fillStyle = '#020617'; // Void black
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.z -= 2; // Speed
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - centerX;
                    star.y = Math.random() * canvas.height - centerY;
                }

                const x = (star.x / star.z) * canvas.width + canvas.width / 2;
                const y = (star.y / star.z) * canvas.height + canvas.height / 2;
                const size = (1 - star.z / canvas.width) * 3;
                const alpha = (1 - star.z / canvas.width);

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60 pointer-events-none" />;
};

export default Starfield;
