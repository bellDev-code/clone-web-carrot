import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layouts/Home';
import LoginPage from './Pages/Login';
import SignUp from './Pages/SignUp';
import { AuthContextProvider } from './Hooks/Context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
