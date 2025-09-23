import React, { useState, useEffect } from 'react';
import CarrierCard from '../components/CarrierCard';

// Generate deadlines relative to the current time for demonstration
const createDeadline = (minutesFromNow: number): Date => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutesFromNow);
    return date;
};

interface HandlingUnit {
  id: string;
  delivery: string;
  consolidated: boolean;
  packingMaterial: string;
}

const generateHandlingUnits = (count: number): HandlingUnit[] => {
    return Array.from({ length: count }, () => ({
        id: (Math.floor(Math.random() * 9e17) + 1e17).toString(),
        delivery: (Math.floor(Math.random() * 9e9) + 1e9).toString(),
        consolidated: Math.random() > 0.3, // 70% chance of being consolidated
        packingMaterial: 'CEV' + Math.random().toString(36).substring(2, 15).toUpperCase(),
    }));
};

const initialCarriers = [
  { id: 1, name: 'FedEx Express', unscannedParcels: 102, deadline: createDeadline(25), handlingUnits: generateHandlingUnits(5) },
  { id: 2, name: 'UPS Ground', unscannedParcels: 88, deadline: createDeadline(45), handlingUnits: generateHandlingUnits(3) },
  { id: 3, name: 'DHL International', unscannedParcels: 25, deadline: createDeadline(70), handlingUnits: generateHandlingUnits(8) },
  { id: 4, name: 'Royal Mail', unscannedParcels: 310, deadline: createDeadline(1), handlingUnits: generateHandlingUnits(2) },
  { id: 5, name: 'TNT', unscannedParcels: 56, deadline: createDeadline(110), handlingUnits: generateHandlingUnits(6) },
  { id: 6, name: 'Parcelforce', unscannedParcels: 12, deadline: createDeadline(135), handlingUnits: generateHandlingUnits(4) },
  { id: 7, name: 'Yodel', unscannedParcels: 73, deadline: createDeadline(150), handlingUnits: generateHandlingUnits(5) },
  { id: 8, name: 'Hermes Evri', unscannedParcels: 91, deadline: createDeadline(180), handlingUnits: generateHandlingUnits(7) },
  { id: 9, name: 'DPD Group', unscannedParcels: 150, deadline: createDeadline(200), handlingUnits: generateHandlingUnits(3) },
  { id: 10, name: 'GLS', unscannedParcels: 42, deadline: createDeadline(220), handlingUnits: generateHandlingUnits(9) },
  { id: 11, name: 'Chronopost', unscannedParcels: 65, deadline: createDeadline(240), handlingUnits: generateHandlingUnits(4) },
].sort((a, b) => a.deadline.getTime() - b.deadline.getTime());


const TruckMonitor: React.FC = () => {
  const [carriers, setCarriers] = useState(initialCarriers);

  useEffect(() => {
    const sortInterval = setInterval(() => {
      const now = new Date();
      
      const sortedCarriers = [...carriers].sort((a, b) => {
        const aIsDeparted = a.deadline < now;
        const bIsDeparted = b.deadline < now;

        if (aIsDeparted && !bIsDeparted) return 1; // a goes to the end
        if (!aIsDeparted && bIsDeparted) return -1; // b goes to the end

        // If both are departed or both are active, sort by deadline
        return a.deadline.getTime() - b.deadline.getTime();
      });

      // Only update state if the order has actually changed
      if (JSON.stringify(sortedCarriers) !== JSON.stringify(carriers)) {
          setCarriers(sortedCarriers);
      }
    }, 1000);

    return () => clearInterval(sortInterval);
  }, [carriers]);


  return (
    <div className="flex-grow w-full pt-4">
      <div className="grid grid-cols-1 gap-6">
        {carriers.map((carrier) => (
          <CarrierCard
            key={carrier.id}
            name={carrier.name}
            unscannedParcels={carrier.unscannedParcels}
            deadline={carrier.deadline}
            handlingUnits={carrier.handlingUnits}
          />
        ))}
      </div>
    </div>
  );
};

export default TruckMonitor;