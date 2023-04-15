/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';

import React from 'react';

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
