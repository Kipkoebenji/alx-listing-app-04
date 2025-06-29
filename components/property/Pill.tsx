import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full text-sm"
    >
      {label}
    </button>
  );
};

export default Pill;
