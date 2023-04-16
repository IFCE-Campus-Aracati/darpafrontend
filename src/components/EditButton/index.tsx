import './style.css';

import { BiEdit } from 'react-icons/bi';

interface ButtonProps {
  onClick: () => void;
}
const EditButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="edit-button" onClick={onClick}>
      <BiEdit /> Editar
    </button>
  );
};

export default EditButton;
