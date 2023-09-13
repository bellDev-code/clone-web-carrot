import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layouts/Home';
import LoginPage from './Pages/Login';
import CreateAccountPage from './Pages/CreateAccount';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/create' element={<CreateAccountPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
