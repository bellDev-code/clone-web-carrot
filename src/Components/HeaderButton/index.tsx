import React, { useState } from 'react';
import { Container, HeaderBtn } from './styles';

const HeaderButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <HeaderBtn onClick={handleLogout}>로그아웃</HeaderBtn>
      ) : (
        <HeaderBtn onClick={handleLogin}>회원가입</HeaderBtn>
      )}
    </Container>
  );
};

export default React.memo(HeaderButton);