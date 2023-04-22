import './style.css';

import { MdAdd } from 'react-icons/md';

interface ButtonProps {
  onClick: () => void;
}

const RegisterProductButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="register-product-button" onClick={onClick}>
      <MdAdd size={32} /> Cadastrar Produto
    </button>
  );
};

export default RegisterProductButton;
