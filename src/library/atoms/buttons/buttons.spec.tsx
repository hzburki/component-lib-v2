import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtons } from './buttons.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicButtons />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
