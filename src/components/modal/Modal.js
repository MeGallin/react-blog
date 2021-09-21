import React, { useState } from 'react';
import './Modal.scss';

function Modal({
  header,
  content,
  footer,
  name,
  title,
  closeButtonTitle,
  ...props
}) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <React.Fragment>
      {showModal ? (
        <div>
          <div
            title="Close modal"
            className={showModal ? 'modal-overlay' : null}
            onClick={() => setShowModal(false)}
          />
          <div className="modal-wrapper">
            <div className="modal-content-wrapper">
              <div header={header} className="modal-header">
                <div>{header}</div>
              </div>

              <div content={content} className="modal-content">
                <div>{content}</div>
              </div>

              <div footer={footer} className="modal-footer">
                <div>{footer}</div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="confirmation"
              >
                {closeButtonTitle}
              </button>
            </div>
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
