import React, { useState, useEffect } from 'react';
import './contact.css';
// import Email from './Mailto';

import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

var linkStyle = {
  // margin: 2,
  // width: 'auto',
  // border: '2px solid silver',
  // flex: 'auto',
  // textAlign: 'center',
};

function Contact(props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign(this);
    }
  });
  return (
    <div
      className="Contact"
      style={{ backgroundColor: '#cfe2e2', height: 'auto', width: '100%' }}
    >
      <h1>Contact</h1>
      <p>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p>
      <div
        className="LinksContainer"
        style={{ display: 'flex', height: 'auto' }}
      >
        <div
          onClick={(e) =>
            (window.location = 'https://www.linkedin.com/in/marcrodriguez2020/')
          }
          className="button-link"
        >
          <AiFillLinkedin size="2em" />
        </div>
        <div
          onClick={(e) =>
            (window.location = 'https://www.facebook.com/MarcRodriguez20')
          }
          className="button-link"
        >
          <AiFillFacebook size="2em" />
        </div>
        <div
          onClick={(e) =>
            (window.location =
              'https://marcanthony-svg.github.io/My-Portfolio-Website/')
          }
          className="button-link"
        >
          {' '}
          Website
        </div>
        <div
          onClick={(e) =>
            (window.location = 'marcanthonyrodriguez95@gmail.com')
          }
          className="button-link"
        >
          {/* <Email></Email> */}
        </div>
      </div>
    </div>
  );
}
export default Contact;
