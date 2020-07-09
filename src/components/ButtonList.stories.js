import React from 'react';

import ButtonList from './ButtonList';
import { buttonData, actionsData } from './Button.stories';

export default {
  component: ButtonList,
  title: 'ButtonList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultButtonsData = [
  { ...buttonData, goo: 'Test Task', },
  { ...buttonData, goo: 'one two three', },
  { ...buttonData, goo: 'is evreyone here in with me', }
];

export const withPinnedTasksData = [
  ...defaultButtonsData.slice(0, 2),
  { id: '2', goo: 'Task 2 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <ButtonList buttons={defaultButtonsData} {...actionsData} />;

export const WithPinnedTasks = () => <ButtonList buttons={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <ButtonList loading buttons={[]} {...actionsData} />;

export const Empty = () => <ButtonList buttons={[]} {...actionsData} />;