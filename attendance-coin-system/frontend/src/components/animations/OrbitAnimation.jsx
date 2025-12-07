import React from 'react';

/**
 * Orbital Animation Component
 * Creates a central glowing element with orbiting nodes
 * Used on the landing page hero section
 */
const OrbitAnimation = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Center Glow Circle */}
            <div className="relative z-10 glass-card p-8 rounded-full breathe-animation shadow-glow-primary">
                <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">20k+</div>
                    <div className="text-sm text-text-muted-dark mt-1">Check-ins tracked</div>
                </div>
            </div>

            {/* Orbit Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Orbit Ring (visual guide - optional) */}
                <div className="absolute w-[280px] h-[280px] rounded-full border border-glass-border opacity-20"></div>

                {/* Orbiting Nodes */}
                {[
                    { label: 'S1', delay: 0, color: 'violet' },
                    { label: 'S2', delay: 5, color: 'cyan' },
                    { label: 'S3', delay: 10, color: 'violet' },
                    { label: 'S4', delay: 15, color: 'cyan' }
                ].map((node, index) => (
                    <div
                        key={node.label}
                        className="absolute"
                        style={{
                            animation: `orbit 20s linear infinite`,
                            animationDelay: `-${node.delay}s`,
                        }}
                    >
                        <div className={`
                            w-16 h-16 rounded-full glass-card flex items-center justify-center
                            border-2 
                            ${node.color === 'violet' ? 'border-primary-violet shadow-glow-primary' : 'border-secondary-cyan shadow-glow-cyan'}
                        `}>
                            <span className={`
                                text-sm font-bold
                                ${node.color === 'violet' ? 'text-primary-violet' : 'text-secondary-cyan'}
                            `}>
                                {node.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrbitAnimation;
