import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const menuList = [
  {
    path: '/',
    text: 'User List',
  },
  {
    path: '/settings',
    text: 'Settings',
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {
        !!menuList && menuList.map((item, i) => (
          <Link to={item.path} key={i}>
            <div className="menu__item">{item.text}</div>
          </Link>
        ))
      }
    </div>
  );
};

export default Menu;
