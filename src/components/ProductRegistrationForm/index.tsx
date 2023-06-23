import './styles.css';

import { useEffect, useRef, useState } from 'react';

interface ProductRegistrationFormProps {
  onSubmit: (schedule: ProductDetails) => void;
  onCancel: () => void;
}

export interface ProductDetails {
  name: string;
  description: string;
  quantity: number;
}

const ProductRegistrationForm: React.FC<ProductRegistrationFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    setQuantity(val < 0 ? 0 : val);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name) {
      const product: ProductDetails = {
        name,
        description,
        quantity,
      };

      onSubmit(product);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="schedule-form-overlay">
      <div className="schedule-form" ref={formRef}>
        <div className="schedule-form-header">
          <h2 className="schedule-form-title">Cadastrar Produto</h2>
        </div>
        <form className="schedule-form-body" onSubmit={handleSubmit}>
          <div className="schedule-form-name">
            <input
              id="name-input"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="schedule-form-description">
            <input
              id="description-input"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="schedule-form-quantity">
            <div className="schedule-form-quantity-input">
              <p className="schedule-form-quantity-title">Quantidade</p>
              <input
                id="quantity-input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <div className="schedule-form-button-container">
            <button className="schedule-form-confirm-button" type="submit">
              Confirmar
            </button>
            <button
              className="schedule-form-cancel-button"
              type="submit"
              onClick={() => onCancel()}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRegistrationForm;
