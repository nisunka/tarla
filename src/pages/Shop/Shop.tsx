import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import Skeleton from '../../components/Skeleton/Skeleton';
import Sort from '../../components/Sort/Sort';
import StoreItem from '../../components/StoreItem/StoreItem';
import style from './Shop.module.css';

type TItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Shop = () => {
  const [item, setItem] = useState(Array<TItem>);
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0) // state of category. default 'all'
  const [sortType, setSortType] = useState({ name: 'popularity', sortProperty: 'rating' })

  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const sortBy = sortType.sortProperty.replace('-', '')
  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://62fe159b41165d66bfb7eb89.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
    .then((response) => {
      return response.json();
    })
    .then((array) => {
      setItem(array);
      setIsLoading(false)
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType])

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.topHead}>
          <h2 className='title'>Shop pastry kits</h2>
          <Search />
        </div>
        <div className={style.bottomHead}>
          <Categories value={categoryId} onChangeCategory={(index)=> setCategoryId(index)} />
          <Sort sorting={sortType} onChangeSort={(item)=> setSortType(item)} />
        </div>
      </div>
      <div className={style.body}>
        {isLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index}/> ) : item.map((item) => (
          <div key={item.id} className={style.item}>
            <StoreItem {...item} />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Shop;
