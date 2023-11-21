/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Menu from './Menu';
import Contacts from './Contacts';
import { companyLinks, menuLinks } from '../utils/links';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <Menu title='О компании'
              items={companyLinks}
              classModificator='about-company'
        />
        <Menu title='Меню'
              items={menuLinks}
              classModificator='menu'
        />
      </div>
      <Contacts place='footer' />
      <div className="footer__copyright">
        <p className="footer__copyright-company">&copy;WELBEX 2022. Все права защищены.</p>
        <a className="footer__copyright-link" href="#" target="_blank">Политика конфиденциальности</a>
      </div>
    </footer>
  )
}

export default Footer;