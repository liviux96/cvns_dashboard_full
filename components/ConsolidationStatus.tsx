import React from 'react';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
    </svg>
);

const XCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
    </svg>
);

interface ConsolidationStatusProps {
    consolidated: boolean;
}

const ConsolidationStatus: React.FC<ConsolidationStatusProps> = ({ consolidated }) => {
    const isYes = consolidated;
    const bgColor = isYes ? 'bg-[#35C04A]/20' : 'bg-[#E22012]/20';
    const textColor = isYes ? 'text-[#35C04A]' : 'text-[#E22012]';
    const text = isYes ? 'Yes' : 'No';
    const icon = isYes ? <CheckCircleIcon /> : <XCircleIcon />;

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
            {icon}
            <span>{text}</span>
        </div>
    );
};

export default ConsolidationStatus;