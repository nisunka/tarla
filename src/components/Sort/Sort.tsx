import React, { useState } from 'react';
import style from './Sort.module.css';

interface ISort {
  onChangeSort(item: any): void;
  sorting: {
    name: string;
    sortProperty: string;
  };
}

const Sort = ({ onChangeSort, sorting }: ISort) => {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(0);

  // const selectedItem = (index: number) => {
  //   onChangeSort(index);
  //   setOpen(false);
  // };

  const sortItem = [
    { name: 'popularity', sortProperty: 'rating' },
    { name: 'price: high - low', sortProperty: 'price' },
    { name: 'price: low - high', sortProperty: '-price' },
    { name: 'alphabet', sortProperty: 'alphabet' },
  ];

  const sortName = sorting.name;
  console.log(sortName);

  return (
    <div className={style.container}>
      <div className={style.label}>
        <span>Sort by: </span>
        <span className={style.sortName} onClick={() => setOpen(!open)}>
          {sortName}
        </span>
      </div>

      {open && (
        <div className={style.popup}>
          {sortItem.map((item, index) => (
            <div
              key={index}
              className={`${style.item} ${
                sorting.sortProperty === item.sortProperty ? `${style.active}` : ''
              }`}
              onClick={() => onChangeSort(item)}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
