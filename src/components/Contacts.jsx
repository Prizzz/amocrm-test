/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import tgLogo from '../assets/tg.svg';
import vbLogo from '../assets/vb.svg';
import waLogo from '../assets/wa.svg';

function Contacts({ place }) {
  return (
    <div className={`contacts contacts_place_${place}`}>
      { place === "footer" && <h2 className="contacts__title">Контакты</h2> }
      <a className={`contacts__phone contacts__phone_place_${place}`} href="tel:+75555555555">+7 555 555-55-55</a>

      <ul className={`contacts__social contacts__social_place_${place}`}>
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank">
            <img src={tgLogo} alt="tgLogo" className='contacts__social-logo' />
          </a>
        </li>
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank">
          <img src={vbLogo} alt="vbLogo" className='contacts__social-logo' />
          </a>
        </li>
        <li className="contacts__social-item">
          <a className="contacts__social-link" href="#" target="_blank">
          <img src={waLogo} alt="waLogo" className='contacts__social-logo' />
          </a>
        </li>
      </ul>
      
      { place === "footer" && <p className="contacts__address">Москва, Путевой проезд 3с1, к 902</p> }
    </div>
  )
}

export default Contacts;