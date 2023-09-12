import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './index';

test('renders search input with placeholder', () => {
  render(<SearchInput />);

  // SearchInput 컴포넌트가 렌더링되는지 확인합니다.
  const searchInput = screen.getByPlaceholderText('물품이나 동네를 검색해보세요');
  expect(searchInput).toBeInTheDocument();

  // 또는 다른 테스트를 추가하여 입력값을 변경하고 검사할 수 있습니다.
  // userEvent.type(searchInput, '검색어 입력');
  // expect(searchInput).toHaveValue('검색어 입력');
});