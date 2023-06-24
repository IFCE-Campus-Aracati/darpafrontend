import './styles.css';

import { useEffect, useRef, useState } from 'react';

interface ScheduleFormProps {
  onSubmit: (schedule: Schedule) => void;
  onCancel: () => void;
}

export interface Schedule {
  file: File | null;
  description: string;
  date: Date;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit, onCancel }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (date && description) {
      const schedule: Schedule = {
        date,
        description,
        file,
      };

      onSubmit(schedule);
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
          <h2 className="schedule-form-title">Novo agendamento</h2>
          <input
            id="date-input"
            type="date"
            value={date ? date.toISOString().substring(0, 10) : ''}
            onChange={handleDateChange}
          />
        </div>
        <form className="schedule-form-body" onSubmit={handleSubmit}>
          <div className="schedule-form-description">
            <input
              id="description-input"
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="schedule-form-file">
            <p className="schedule-form-file-title">Anexos</p>
            <div className="schedule-form-file-body">
              <input
                id="file-input"
                type="file"
                accept=".stl"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="schedule-form-button-container">
            <button className="schedule-form-confirm-button" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
