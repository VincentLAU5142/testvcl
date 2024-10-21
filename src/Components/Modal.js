import React from "react";
import "./Modal.css"; // Include your CSS for modal styles

const Modal = ({ isOpen, onClose, stock, children }) => {
  if (!isOpen || !stock) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
