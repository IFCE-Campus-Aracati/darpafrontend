import './styles.css';

import React from 'react';

interface AvatarProps {
  username: string;
  clickAction: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ username, clickAction }) => {
  const firstLetter = username[0];

  return (
    <button type="button" className="avatar" onClick={clickAction}>
      <span className="avatar-letter">{firstLetter}</span>
    </button>
  );
};

export default Avatar;
