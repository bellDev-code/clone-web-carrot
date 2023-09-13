import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layouts/Home';
import LoginPage from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
