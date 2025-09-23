import React from 'react';

interface DashboardButtonProps {
  icon: React.ReactNode;
  title: string;
  subtext: string;
  onClick?: () => void;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ icon, title, subtext, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-start text-center p-4 w-60 h-40
                 bg-[#00008F] border border-[#0100FD] rounded-lg shadow-lg
                 hover:bg-[#0100FD] transition-colors duration-500 ease-in-out
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`${title}: ${subtext}`}
      disabled={!onClick}
    >
      <div className="text-[#0100FD] group-hover:text-white transition-colors duration-500 ease-in-out">
        {icon}
      </div>
      <h2 className="mt-3 text-lg font-bold text-white/95">
        {title}
      </h2>
      <p className="mt-1 text-xs text-white/70">
        {subtext}
      </p>
    </button>
  );
};

export default DashboardButton;