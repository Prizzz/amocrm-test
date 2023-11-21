/* eslint-disable react/jsx-no-target-blank */

import React from 'react';

function MenuItem({ title, link }) {
  return (
    <a className="menu__link" href={link} target="_blank">{title}</a>
  )
}

export default MenuItem;