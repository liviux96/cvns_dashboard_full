import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import SystemClock from './components/SystemClock';
import DashboardButton from './components/DashboardButton';
import TruckMonitor from './pages/TruckMonitor';

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 2.25 12v-1.5a3.375 3.375 0 0 0 3.375-3.375H15M8.25 18.75v-1.875a3.375 3.375 0 0 1 3.375-3.375h1.5a3.375 3.375 0 0 1 3.375 3.375v1.875" />
    </svg>
);

const ChartPieIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

const AdjustmentsHorizontalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const renderMainPage = () => (
    <div className="flex-grow flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <p className="mb-2 text-xl font-bold tracking-widest" style={{ color: '#0100fd' }}>
          MEDTRONIC
        </p>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white/95">
          CVNS Outbound Dashboard
        </h1>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <DashboardButton
          icon={<TruckIcon />}
          title="Truck Monitor"
          subtext="Track truck schedules and check handling unit statuses."
          onClick={() => setCurrentPage('truckMonitor')}
        />
        <DashboardButton
          icon={<ChartPieIcon />}
          title="Productivity Monitor"
          subtext="Check warehouse productivity and performance."
        />
        <DashboardButton
          icon={<AdjustmentsHorizontalIcon />}
          title="Cheatsheet"
          subtext="Add or modify operators information & more."
        />
      </div>
    </div>
  );

  return (
    <main className="relative w-screen h-screen overflow-y-auto bg-gradient-to-br from-[#191716] via-[#140f4b]/90 to-[#140f4b] text-white font-['Montserrat']">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col min-h-full p-4">
        <header className="flex justify-between items-center w-full flex-shrink-0">
            {currentPage === 'main' ? (
                <div /> 
            ) : (
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => setCurrentPage('main')} 
                        className="flex items-center gap-2 rounded-lg border border-[#0100FD] bg-[#00008F] px-4 py-2 text-sm font-semibold text-white/90 shadow-lg hover:bg-[#0100FD] transition-colors duration-300 ease-in-out"
                        aria-label="Back to Main Dashboard"
                    >
                        <ArrowLeftIcon />
                        Back to Main
                    </button>
                    <h2 className="text-xl font-bold text-white/90">Truck Monitor</h2>
                </div>
            )}
          <SystemClock />
        </header>
        
        {currentPage === 'main' ? renderMainPage() : <TruckMonitor />}
      </div>
    </main>
  );
};

export default App;