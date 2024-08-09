import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './pages/index';
import { Checkout, CreateNode, DeleteNode, ShowNode, Home, EditNode } from './pages/index';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dataMart/details/:id' element={<ShowNode />} />
        <Route path='/dataMart/checkout' element={<Checkout />} />
        <Route path='/dataMart/create' element={<CreateNode />} />
        <Route path='/dataMart/delete/:id' element={<DeleteNode />} />
        <Route path='/dataMart/edit/:id' element={<EditNode />} />
    </Routes>
  )
}

export default App;

