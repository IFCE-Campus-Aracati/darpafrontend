import './style.css';

import { MdAdd } from 'react-icons/md';

interface ButtonProps {
  onClick: () => void;
}
const SolicitationButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="new-request-button" onClick={onClick}>
      <MdAdd /> Nova solicitação
    </button>
  );
};

export default SolicitationButton;
