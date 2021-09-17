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

const title = () => {
  return <span>Contact Us</span>;
};
const closeButtonTitle = () => {
  return <span>Cancel</span>;
};

function Footer() {
  return (
    <footer>
      <Modal
        content={modalContent()}
        title={title()}
        closeButtonTitle={closeButtonTitle()}
      />
      <DateTime />
    </footer>
  );
}

export default Footer;
