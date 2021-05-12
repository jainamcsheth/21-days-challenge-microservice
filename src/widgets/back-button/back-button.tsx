import React from 'react';
import { useNavigate } from 'react-router';
import styles from './back-button.module.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    navigate(-1);
  };

  return (
    <button className={styles.button} onClick={handleBackClick} type="button">
      Back
    </button>
  );
};
