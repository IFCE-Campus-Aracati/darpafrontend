import './styles.css';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface PrinterDropdownProps {
  printers: string[];
}

const PrinterDropdown: React.FC<PrinterDropdownProps> = ({ printers }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="printer-dropdown-container">
      <button className="printer-dropdown-header" onClick={handleDropdownToggle}>
        {printers[0]}
        <IoIosArrowDown className={isDropdownOpen ? 'arrow-icon open' : 'arrow-icon'} />
      </button>
      {isDropdownOpen && (
        <ul className="printer-dropdown-list">
          {printers.map((printer) => (
            <li key={printer}>{printer}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrinterDropdown;
