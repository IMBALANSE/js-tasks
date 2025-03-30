import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.chapter}</h3>
      <p><strong>Источник:</strong> {task.source === 'codeWars' ? 'CodeWars' : 'Learn JavaScript'}</p>
      <p><strong>Глава:</strong> {task.chapter}</p>
      <p><strong>Тема:</strong> {task.topic}</p>
      <p><strong>Название:</strong> {task.title}</p>
      {/* <p><strong>Описание:</strong> {task.description}</p> */}
      <pre>{task.description}</pre>
      {task.image && <img src={`/images/${task.image}`} alt={task.title} />}
      <details>
        <summary>Показать решение</summary>
        <pre>{task.solution}</pre>
      </details>
    </div>
  );
};

export default Task;
