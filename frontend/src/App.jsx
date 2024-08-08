import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './pages/index';
import { Checkout, CreateData, DeleteData, ShowData, Home, EditData } from './pages/index';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dataMart/details/:id' element={<ShowData />} />
        <Route path='/checkout/user' element={<Checkout />} />
        <Route path='/dataMart/create' element={<CreateData />} />
        <Route path='/dataMart/delete/:id' element={<DeleteData />} />
        <Route path='/dataMart/edit/:id' element={<EditData />} />
    </Routes>
  )
}

export default App;

