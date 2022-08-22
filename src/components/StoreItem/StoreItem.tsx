import React, { useState } from 'react';
import style from './StoreItem.module.css';

type TStoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: TStoreItem) => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className={style.card}>
      <img src={imgUrl} alt="product" className={style.img} />
      <div className={style.body}>
        <h3 className={style.title}>{name}</h3>
        <span className={style.price}>Kit of 6 - {price} $</span>
        <button onClick={addToCart} className={`btnPrimary ${style.btn}`}>
          + Add to cart
          <span className={style.count}>{count}</span>
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
