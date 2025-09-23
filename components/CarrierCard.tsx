import React, { useState, useEffect } from 'react';
import HandlingUnitTable from './HandlingUnitTable';

interface HandlingUnit {
    id: string;
    delivery: string;
    consolidated: boolean;
    packingMaterial: string;
}

interface CarrierCardProps {
  name: string;
  unscannedParcels: number;
  deadline: Date;
  handlingUnits: HandlingUnit[];
}

const PROGRESS_WINDOW_SECONDS = 4 * 60 * 60; // 4 hours

const CarrierCard: React.FC<CarrierCardProps> = ({ name, unscannedParcels, deadline, handlingUnits }) => {
  const [isOpen, setIsOpen] = useState(false);

  const calculateSecondsRemaining = () => {
    const now = new Date();
    const diff = (deadline.getTime() - now.getTime()) / 1000;
    return Math.max(0, diff);
  };

  const [secondsRemaining, setSecondsRemaining] = useState(calculateSecondsRemaining);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining(calculateSecondsRemaining());
    }, 1000);

    return () => clearInterval(timerId);
  }, [deadline]);

  const formatTimeLeft = (totalSeconds: number): string => {
    if (totalSeconds <= 0) return '00:00:00';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const formattedDeadline = deadline.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  const progressPercentage = Math.min(
    100,
    ((PROGRESS_WINDOW_SECONDS - secondsRemaining) / PROGRESS_WINDOW_SECONDS) * 100
  );

  const getProgressBarColor = () => {
    if (secondsRemaining <= 0) return 'bg-gray-500';
    if (progressPercentage >= 85 || secondsRemaining < 15 * 60) return 'bg-[#E22012]';
    if (progressPercentage >= 60) return 'bg-[#FBFF1F]';
    return 'bg-[#35C04A]';
  };
  
  const cardBorderColor = () => {
    if (secondsRemaining <= 0) return 'border-gray-500/80';
    if (progressPercentage >= 85 || secondsRemaining < 15 * 60) return 'border-[#E22012]/80';
    if (progressPercentage >= 60) return 'border-[#FBFF1F]/80';
    return 'border-[#0100FD]/80';
  }

  const isDeparted = secondsRemaining <= 0;

  return (
    <div className={`bg-[#191716]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border ${cardBorderColor()} transition-all duration-300 flex flex-col ${isDeparted ? 'opacity-50' : ''}`}>
      <div 
        className="p-5 flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="text-left flex-shrink-0 w-1/4">
            <h3 className="font-bold text-lg text-white/95 truncate" title={name}>{name}</h3>
            <p className="font-mono text-3xl text-white tracking-tighter my-1">
                {formatTimeLeft(secondsRemaining)}
            </p>
        </div>
        
        <div className="flex-grow text-center">
          <p className="text-6xl font-bold text-white">{unscannedParcels}</p>
          <p className="text-xs text-white/60 uppercase tracking-wider">Parcels Unscanned</p>
        </div>
        
        <div className="text-right flex-shrink-0 w-1/4">
          <p className="text-2xl font-semibold text-white/90">{formattedDeadline}</p>
          <p className="text-xs text-white/60 uppercase tracking-wider">Deadline</p>
        </div>
      </div>
      
      {isOpen && <HandlingUnitTable handlingUnits={handlingUnits} />}

      <div className="w-full bg-black/30 h-2 flex-shrink-0">
        <div
          className={`h-full ${getProgressBarColor()} transition-all duration-500 ease-linear`}
          style={{ width: `${Math.max(0, progressPercentage)}%` }}
        />
      </div>
    </div>
  );
};

export default CarrierCard;