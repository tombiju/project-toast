import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(toastID) {
    setToasts(toasts.filter((toast) => toast.ID !== toastID));
  }

  function handleCreate(variant, messageText) {
    const toastID = crypto.randomUUID();
    const freshToasts = [
      ...toasts,
      {
        ID: toastID,
        variant,
        messageText,
      },
    ];
    setToasts(freshToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider value={{ handleDismiss, handleCreate, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
