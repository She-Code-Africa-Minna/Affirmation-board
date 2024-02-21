import React from 'react';
import '../styles/modal.css';

const Modal = ({ children, onClose}) => {
  return (
    <>
      <div className='modal-container'>
        {children}
      </div>
      <div className='modal-overlay' onClick={onClose} />
    </>
  )
}

export default Modal