import React from 'react';

import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider/ToastProvider';
import Footer from '../Footer';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
