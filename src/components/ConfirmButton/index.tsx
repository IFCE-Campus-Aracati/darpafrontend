import './style.css';

interface ButtonProps {
  onClick: () => void;
}
const ConfirmButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="confirm-button" onClick={onClick}>
      Confirmar
    </button>
  );
};

export default ConfirmButton;
