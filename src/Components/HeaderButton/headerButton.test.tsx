import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderButton from './index';
import { MemoryRouter } from 'react-router-dom';

describe('HeaderButton', () => {
  it('renders login button when not logged in', () => {
    render(
      <MemoryRouter> {/* Wrap your component with MemoryRouter */}
        <HeaderButton />
      </MemoryRouter>
    );
    
    const loginButton = screen.getByText('로그인');
    expect(loginButton).toBeInTheDocument();
  });

  it('renders logout button when logged in', () => {
    render(
      <MemoryRouter>
        <HeaderButton />
      </MemoryRouter>
    );
    
    const loginButton = screen.getByText('로그인');
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText('로그아웃');
    expect(logoutButton).toBeInTheDocument();
  });

  it('changes to login mode when clicking logout button', () => {
    render(
      <MemoryRouter>
        <HeaderButton />
      </MemoryRouter>
    );
    
    const loginButton = screen.getByText('로그인');
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText('로그아웃');
    fireEvent.click(logoutButton);

    const loginButtonAfterLogout = screen.getByText('로그인');
    expect(loginButtonAfterLogout).toBeInTheDocument();
  });
});