import './style.css';

import { BiTrash } from 'react-icons/bi';

interface ButtonProps {
  onClick: () => void;
}
const DeleteButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      <BiTrash color="red" /> Excluir
    </button>
  );
};

export default DeleteButton;
