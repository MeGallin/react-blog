import React from 'react';
import DateTime from '../dateTime/DateTime';
import Modal from '../modal/Modal';
import './Footer.css';

const headerContent = () => {
  return <div>Contact form</div>;
};
const modalContent = () => {
  return <p>Contact form to follow</p>;
};
const footerContent = () => {
  return <p>Footer Content</p>;
};
const buttonLabel = () => {
  return <span>Contact Us</span>;
};

function Footer() {
  return (
    <footer>
      <Modal
        header={headerContent()}
        content={modalContent()}
        footer={footerContent()}
        title={buttonLabel()}
      />
      <DateTime />
    </footer>
  );
}

export default Footer;
