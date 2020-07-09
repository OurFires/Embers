
import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const buttonData = {
  goo: 'Test Task',
};

export const actionsData = {
  onClick: action('onClick'),
  onLongPress: action('onLongPress'),
};

export const Default = () => <Button buttonData={{ ...buttonData }} {...actionsData} />;

export const Variant = () => <Button buttonData={{ ...buttonData, state:"PRESSED" }} {...actionsData} />;