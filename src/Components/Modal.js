import React from "react";
import "./Modal.css"; // Include your CSS for modal styles

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div id="container">
        <div className="modal-content">
          {" "}
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
