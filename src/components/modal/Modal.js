import React, { useState } from 'react';
import './Modal.css';

function Modal({ header, content, footer, name, title, ...props }) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <React.Fragment>
      {showModal ? (
        <div>
          <div
            className={showModal ? 'modal-overlay' : null}
            onClick={() => setShowModal(false)}
          ></div>

          <div header={header} className="modal-wrapper">
            <h1>{header}</h1>
            <div content={content}>
              <div>{content}</div>
            </div>
            <div footer={footer}>
              <div>{footer}</div>
            </div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      ) : null}

      <button type="button" onClick={handleShowModal} className="modal-btn">
        {title}
      </button>
    </React.Fragment>
  );
}

export default Modal;
