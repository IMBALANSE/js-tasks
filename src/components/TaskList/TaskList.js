import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ tasks, onRandomTask }) => {
  if (tasks.length === 0) {
    return <p>Нет задач, соответствующих выбранным фильтрам.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
