import React, { useState, useEffect, useRef } from 'react';

const BOOT_LOGS = [
    "Initializing Kernel...",
    "Loading modules: kvm, intel_rapl, x86_pkg_temp_thermal...",
    "[ OK ] Started Show Plymouth Boot Screen.",
    "[ OK ] Reached target Paths.",
    "[ OK ] Reached target Basic System.",
    "Mounting Configuration File System...",
    "[ OK ] Mounted Configuration File System.",
    "[ OK ] Started Network Manager.",
    "Starting Docker Application Container Engine...",
    "[ OK ] Started Docker Application Container Engine.",
    "Starting Kubernetes Kubelet...",
    "[ OK ] Started Kubernetes Kubelet.",
    "Connecting to Global Infrastructure Grid...",
    "Establishing Secure SSH Tunnel...",
    "Access Granted.",
    "Welcome to SRE Portfolio v1.0.0"
];

const BootSequence = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const bottomRef = useRef(null);
    const onCompleteRef = useRef(onComplete);

    // Keep the callback ref updated
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < BOOT_LOGS.length) {
                setLines(prev => [...prev, BOOT_LOGS[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                onCompleteRef.current();
            }
        }, 100); // Speed of log lines

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Use 'auto' for instant scrolling to prevent lag with fast updates
        bottomRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
    }, [lines]);

    return (
        <div className="absolute inset-0 z-50 bg-black text-green-500 font-mono p-8 overflow-hidden flex flex-col justify-end">
            <div className="space-y-1">
                {lines.map((line, i) => (
                    <div key={i} className="break-words">
                        <span className="text-slate-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {line.startsWith("[ OK ]") ? (
                            <span><span className="text-green-400 font-bold">[ OK ]</span> {line.substring(6)}</span>
                        ) : (
                            line
                        )}
                    </div>
                ))}
                <div ref={bottomRef} />
                <div className="animate-pulse">_</div>
            </div>
        </div>
    );
};

export default BootSequence;
