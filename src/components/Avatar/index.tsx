import React from 'react';
import './styles.css';

interface AvatarProps {
  username: string;
  onClick: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ username, onClick }) => {
  return (
    <div className="avatar" onClick={onClick}>
      <span className="avatar-letter">{username[0]}</span>
    </div>
  );
};

export default Avatar;
