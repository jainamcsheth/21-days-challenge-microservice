import React from 'react';
import { useNavigate } from 'react-router';
import styles from './back-button.module.scss';

export interface BackButtonProps {
  /**
   * Used to refetch the data in home component.
   * This will be called on back navigate.
   */
  refetchApi?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ refetchApi }) => {
  const navigate = useNavigate();

  const handleBackClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    if (refetchApi) {
      refetchApi();
    }
    navigate(-1);
  };

  return (
    <button className={styles.button} onClick={handleBackClick} type="button">
      Back
    </button>
  );
};
