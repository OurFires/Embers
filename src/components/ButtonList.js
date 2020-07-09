import React from 'react';

import Button from './Button';

function ButtonList({ loading, buttons, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (buttons.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {buttons.map((button, key) => (
        <Button key={key} buttonData={button} {...events} />
      ))}
    </div>
  );
}

export default ButtonList;