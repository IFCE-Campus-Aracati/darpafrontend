import './style.css'

    interface ButtonProps{
        onClick :() =>void;
    }
    const cancelButton: React.FC<ButtonProps>= ({ onClick})=> {
    return (
        <button className="cancel-button" onClick={onClick}>
             cancelar
        </button>
    );
  }

  export default cancelButton;