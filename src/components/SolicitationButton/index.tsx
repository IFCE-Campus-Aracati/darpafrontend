import './style.css';

import { MdAdd } from 'react-icons/md';

interface ButtonProps {
  onClick: () => void;
}
const SolicitationButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="new-solicitation-button" onClick={onClick}>
      <MdAdd size={32} /> Nova solicitação
    </button>
  );
};

export default SolicitationButton;
