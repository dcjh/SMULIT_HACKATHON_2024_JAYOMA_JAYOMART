import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './pages/index';
import { CreateNode, DeleteNode, ShowNode, Home, EditNode, Mart, SignIn, SignUp } from './pages/index';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dataMart' element={<Mart />} />
        <Route path='/dataMart/details/:id' element={<ShowNode />} />
        {/* <Route path='/dataMart/checkout' element={<Checkout />} /> */}
        <Route path='/dataMart/create' element={<CreateNode />} />
        <Route path='/dataMart/delete/:id' element={<DeleteNode />} />
        <Route path='/dataMart/edit/:id' element={<EditNode />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
    </Routes>
  )
}

export default App;

