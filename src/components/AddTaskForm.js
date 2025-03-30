import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    chapter: '',
    source: 'LJS',
    topic: '',
    title: '',
    description: '',
    image: '',
    solution: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      id: Date.now() // Генерируем уникальный ID
    };
    onAddTask(newTask);
    // Сброс формы
    setFormData({
      chapter: '',
      source: 'codeWars',
      topic: '',
      title: '',
      description: '',
      image: '',
      solution: ''
    });
  };

  return (
    <div className="add-task-form">
      <h2>Добавить новую задачу</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Источник:</label>
          <select 
            name="source" 
            value={formData.source} 
            onChange={handleChange}
            required
          >
            <option value="codeWars">CodeWars</option>
            <option value="LJS">Learn JavaScript</option>
          </select>
        </div>

        <div className="form-group">
          <label>Глава:</label>
          <input
            type="text"
            name="chapter"
            value={formData.chapter}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Тема:</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Название:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Изображение (имя файла):</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Решение:</label>
          <textarea
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Добавить задачу</button>
      </form>
    </div>
  );
};

export default AddTaskForm;