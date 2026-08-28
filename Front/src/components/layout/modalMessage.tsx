import type { ReactNode } from 'react';
import styles from './modalMessage.module.css';

interface ModalProps {
  isOpen: boolean,
  title: string,
  children: ReactNode,
  onClose: () => void;
}

export default function modalMessage({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
