import React, { useState } from "react";
import Modal from "./Components/Modal";
import Nevbar from "./Components/Nevbar";
document.body.style.width = "800px";
document.body.style.height = "600px";
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <Nevbar />
      <button onClick={handleOpenModal}>顯示數據</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>香港市場指數</h2>
      </Modal>
    </div>
  );
};

export default App;
