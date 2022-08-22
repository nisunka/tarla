import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Trash } from '../../assets/img/icon/trash.svg';
import style from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.head}>
          <h2 className="title">Cart</h2>
          <button className={style.btn}>
            <Trash style={{ width: '20px', height: '20px' }} />
            Empty the trash
          </button>
        </div>
        <div className={style.contentCart}>{/* тут будут выбранные товары */}</div>
        <div className={style.footer}>
          <div className={style.topPart}>
            <span>
              Total in cart: <span>3 items</span>
            </span>
            <span>
              Order price: <span>900 $</span>
            </span>
          </div>
          <div className={style.bottomPart}>
            <Link to="/shop">Back</Link>
            <button>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
