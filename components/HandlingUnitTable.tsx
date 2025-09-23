import React from 'react';
import ConsolidationStatus from './ConsolidationStatus';

interface HandlingUnit {
    id: string;
    delivery: string;
    consolidated: boolean;
    packingMaterial: string;
}

interface HandlingUnitTableProps {
    handlingUnits: HandlingUnit[];
}

const HandlingUnitTable: React.FC<HandlingUnitTableProps> = ({ handlingUnits }) => {
    if (!handlingUnits || handlingUnits.length === 0) {
        return (
            <div className="p-4 text-center text-white/60">
                No handling units to display.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto p-2 bg-black/20">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-white/70 uppercase">
                    <tr className="border-b border-white/20">
                        <th scope="col" className="px-4 py-3">Handling Unit</th>
                        <th scope="col" className="px-4 py-3">Delivery</th>
                        <th scope="col" className="px-4 py-3">Consolidation</th>
                        <th scope="col" className="px-4 py-3">Packing Material</th>
                    </tr>
                </thead>
                <tbody>
                    {handlingUnits.map((unit) => (
                        <tr key={unit.id} className="border-b border-white/10 last:border-b-0 hover:bg-white/5">
                            <td className="px-4 py-4 font-mono text-white/90">{unit.id}</td>
                            <td className="px-4 py-4 font-mono text-white/90">{unit.delivery}</td>
                            <td className="px-4 py-4">
                                <ConsolidationStatus consolidated={unit.consolidated} />
                            </td>
                            <td className="px-4 py-4 font-mono text-white/90">{unit.packingMaterial}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HandlingUnitTable;
