import React from 'react';
import { render } from '@testing-library/react';
import { BasicAnalyticsDrawer } from './analytics-drawer.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicAnalyticsDrawer />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
