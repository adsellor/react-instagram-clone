import React from 'react';

import './index.css'


const Header = ({name, lastName}) => (
  <div className="header"> {name}, {lastName}</div>
)

export default Header
