import './styles.css';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface PrinterDropdownProps {
  printers: string[];
  onSelected: (selectedPrinterName: string) => void;
}

const PrinterDropdown: React.FC<PrinterDropdownProps> = ({ printers, onSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (printer: string) => {
    setSelectedItem(printer);
    onSelected(printer);
    setIsOpen(false);
  };

  return (
    <nav className="printer-selection-dropdown">
      <button
        className="printer-selection-dropdown-button"
        onClick={handleDropdownToggle}
      >
        {selectedItem ? selectedItem : printers[0]}
        <IoIosArrowDown className={isOpen ? 'arrow-icon open' : 'arrow-icon'} />
      </button>
      {isOpen && (
        <ul className="printer-selection-dropdown-menu">
          {printers.map((printer) => (
            <li key={printer}>
              <button onClick={() => handleItemClick(printer)}>{printer}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default PrinterDropdown;
