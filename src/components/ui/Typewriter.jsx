import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 0, className = "", cursor = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <span className="animate-pulse text-cyber-cyan ml-1">_</span>
            )}
        </span>
    );
};

export default Typewriter;
