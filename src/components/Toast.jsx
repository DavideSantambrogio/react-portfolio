import React from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Toast = ({ message, backgroundColor }) => {
  const showToast = () => {
    Toastify({
      text: message,
      backgroundColor: backgroundColor,
      close: true,
      duration: 5000,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        marginTop: "5rem",
        background: "rgba(255,255,255,0.8)",
        color: "#000",
        fontSize: "16px",
        padding: "20px",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      },
    }).showToast();
  };

  return (
    <button onClick={showToast} style={{ display: 'none' }}></button>
  );
};

export default Toast;
