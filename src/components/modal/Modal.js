import React from 'react';
import './Modal.scss';

function Modal() {
  return (
    <React.Fragment>
      <div className="modal-wrapper">
        <div>Modal Header</div>
        <div>Modal Content</div>
        <div>
          Modal footer
          <button>X</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
