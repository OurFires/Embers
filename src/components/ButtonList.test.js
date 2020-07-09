import React from 'react';
import ReactDOM from 'react-dom';
import { WithPinnedTasks } from './ButtonList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks />, div);

  // We expect the task titled "Task 2 (pinned)" to be rendered third, and at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(3) input[value="Task 2 (pinned)"]');
  expect(lastTaskInput)./* not. */toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});