import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layouts/Home';
import LoginPage from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
