import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/prerna-priya-5b09b214a"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Prerna_Priya
        </a>
        <section className="Footer__Items">
        <a
          href="https://github.com/k1653"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Git-Hub
        </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
