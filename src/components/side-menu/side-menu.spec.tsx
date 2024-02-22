import React from 'react';
import { render } from '@testing-library/react';
import { BasicSideMenu } from './side-menu.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSideMenu />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
