import React from 'react';
import DashboardButton from '../components/DashboardButton';

const GlobeAmericasIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.101a9.025 9.025 0 0 1 3 0M10.5 20.899a9.025 9.025 0 0 1 3 0M3.101 10.5a9.025 9.025 0 0 1 0 3M20.899 10.5a9.025 9.025 0 0 1 0 3M15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
);

const GlobeEuropeAfricaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-1.63 0-3.07.75-4.04 1.875" />
    </svg>
);

const ProductivityMonitor: React.FC = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center py-12">
            <div className="text-center">
                <p className="mb-2 text-xl font-bold tracking-widest" style={{ color: '#0100fd' }}>
                    MEDTRONIC
                </p>
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white/95">
                    Productivity Monitor
                </h1>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
                <DashboardButton
                    icon={<GlobeAmericasIcon />}
                    title="A-Flow"
                    subtext="Check Productivity and Performance for A Flow."
                />
                <DashboardButton
                    icon={<GlobeEuropeAfricaIcon />}
                    title="B-Flow"
                    subtext="Check Productivity and Performance for B Flow."
                />
            </div>
        </div>
    );
};

export default ProductivityMonitor;
