import React, { useState } from 'react';
import { Container, HeaderBtn } from './styles';
import { useNavigate } from 'react-router-dom';

const HeaderButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/login')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <HeaderBtn onClick={handleLogout}>로그아웃</HeaderBtn>
      ) : (
        <HeaderBtn onClick={handleLogin}>로그인</HeaderBtn>
      )}
    </Container>
  );
};

export default React.memo(HeaderButton);