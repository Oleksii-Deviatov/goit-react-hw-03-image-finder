import React, { useEffect } from 'react';

function Modal({ largeurl, alt, onOverlay, escFunctionModal }) {
  useEffect(() => {
    document.addEventListener('keydown', escFunctionModal, false);

    return () => {
      document.removeEventListener('keydown', escFunctionModal, false);
    };
  }, []);

  return (
    <div className="Overlay" onClick={onOverlay}>
      <div className="Modal">
        <img src={largeurl} alt={alt} />
      </div>
    </div>
  );
}

export default Modal;
