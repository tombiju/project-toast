import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map((toast) => {
        return (
          <li key={toast.ID} className={styles.toastWrapper}>
            <Toast
              toastID={toast.ID}
              variant={toast.variant}
              messageText={toast.messageText}
            ></Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
