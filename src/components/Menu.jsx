import React from 'react';
import MenuItem from './MenuItem';

function Menu({ title, items, classModificator }) {
  const menuItems = items.map(item => (
      <li className="menu__list-item"
          key={item.title}>
        <MenuItem title={item.title}
                  link={item.link}
        />
      </li>
    ));

  return (
    <nav className={`menu menu_${classModificator}`}>
      <h2 className="menu__title">{title}</h2>
      <ul className={`menu__list menu__list_${classModificator}`}>
        { menuItems }
      </ul>
    </nav>
  )
}

export default Menu;