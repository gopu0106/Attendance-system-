import React from 'react';

const MarketingShell = ({ children, className = '' }) => {
    return (
        <div className="landing-root">
            <div className="landing-bg">
                <div className={`landing-card ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MarketingShell;
