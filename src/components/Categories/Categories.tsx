import React, { useState } from 'react';
import style from './Categories.module.css';

const categoriesList = ['all', 'with filling', 'without filling'];

interface ICategories {
  value: number;
  onChangeCategory(index: number): void;
}

const Categories = ({ value, onChangeCategory }: ICategories) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const categorySelect = (index: number) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className={style.list}>
      {categoriesList.map((item, index) => (
        <div
          key={index}
          className={`${style.item} ${value === index ? `${style.active}` : ''}`}
          onClick={() => onChangeCategory(index)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Categories;
