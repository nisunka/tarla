import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop searchValue={searchValue} setSearchValue={setSearchValue} />}
        />
        <Route path="/ourStory" element={<NotFound />} />
        <Route path="/whoIsTarla" element={<NotFound />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
