import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center bg-white shadow p-4 space-y-4">
      <div className="flex justify-between w-full max-w-7xl">
        <div className="text-xl font-bold">🏠 MyRental</div>
        <div className="space-x-4">
          <button className="px-4 py-2">Sign In</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search for properties..."
        className="w-full max-w-2xl p-2 border border-gray-300 rounded"
      />
      <div className="flex space-x-4">
        {["Rooms", "Mansion", "Countryside", "Villa", "Apartment"].map(type => (
          <span key={type} className="cursor-pointer hover:text-blue-500">{type}</span>
        ))}
      </div>
    </header>
  );
};

export default Header;
