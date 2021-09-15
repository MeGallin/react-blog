import React from 'react';
import DateTime from '../dateTime/DateTime';
import Modal from '../modal/Modal';
import './Footer.scss';
import ContactForm from '../contactForm/ContactForm';

const modalContent = () => {
  return (
    <React.Fragment>
      <ContactForm />
    </React.Fragment>
  );
};

const buttonLabel = () => {
  return <span>Contact Us</span>;
};

function Footer() {
  return (
    <footer>
      <Modal content={modalContent()} title={buttonLabel()} />
      <DateTime />
    </footer>
  );
}

export default Footer;
