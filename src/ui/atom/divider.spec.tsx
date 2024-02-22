import React from 'react';
import { render } from '@testing-library/react';
import { BasicDivider } from './divider.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicDivider />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
