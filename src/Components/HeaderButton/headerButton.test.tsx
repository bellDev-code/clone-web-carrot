import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderButton from './index';

test('HeaderButton 렌더링 및 로그인/로그아웃 테스트', () => {
  render(<HeaderButton />);
  
  // 초기 상태로 "회원가입" 버튼이 나타나야 합니다.
  const signupButton = screen.getByText('회원가입');
  expect(signupButton).toBeInTheDocument();

  // "회원가입" 버튼을 클릭하여 "로그아웃" 버튼으로 바뀌는지 테스트
  fireEvent.click(signupButton);
  const logoutButton = screen.getByText('로그아웃');
  expect(logoutButton).toBeInTheDocument();

  // "로그아웃" 버튼을 클릭하여 다시 "회원가입" 버튼으로 바뀌는지 테스트
  fireEvent.click(logoutButton);
  expect(signupButton).toBeInTheDocument();
});