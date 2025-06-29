import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 mt-8">
      <p>&copy; {new Date().getFullYear()} MyRental. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
