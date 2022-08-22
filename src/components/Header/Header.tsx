import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logoTarla.svg';
import { ReactComponent as Login } from '../../assets/img/icon/login.svg';
import { ReactComponent as Cart } from '../../assets/img/icon/cart.svg';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const menuItem = [
  {
    path: '/shop',
    name: 'Shop',
  },
  {
    path: '/ourStory',
    name: 'Our Story',
  },
  {
    path: '/whoIsTarla',
    name: 'Who is Tarla?',
  },
];

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={style.nav}>
            {menuItem.map((item, index) => (
              <Link to={item.path} key={index} className={style.item}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.rightSide}>
          <button className={style.btn}>
            <Login />
            Log in
          </button>
          <Link to="/cart" className={style.btn}>
            <Cart />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
