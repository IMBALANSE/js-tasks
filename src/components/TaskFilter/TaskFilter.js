import React from 'react';

const TaskFilter = ({ 
  onRandomTask, 
  onSourceChange, 
  onTopicChange,
  onChapterChange, 
  availableTopics,
  availableChapters 
}) => {
  return (
    <div className="filter">
      <h2>Фильтр задач</h2>
      
      <div className="filter-group">
        <label>
          <input 
            type="checkbox" 
            onChange={(e) => onRandomTask(e.target.checked)} 
          />
          Случайная задача
        </label>
      </div>
      
      <div className="filter-group">
        <h3>Источник задач:</h3>
        <label>
          <input 
            type="checkbox" 
            value="codeWars" 
            onChange={(e) => onSourceChange('codeWars', e.target.checked)} 
          />
          CodeWars
        </label>
        <label>
          <input 
            type="checkbox" 
            value="LJS" 
            onChange={(e) => onSourceChange('LJS', e.target.checked)} 
          />
          Learn JavaScript
        </label>
      </div>
      
      <div className="filter-group">
        <h3>Темы:</h3>
        {availableTopics.map(topic => (
          <label key={topic}>
            <input 
              type="checkbox" 
              value={topic} 
              onChange={(e) => onTopicChange(topic, e.target.checked)} 
            />
            {topic}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h3>Главы:</h3>
        {availableChapters.map(chapter => (
          <label key={chapter}>
            <input 
              type="checkbox" 
              value={chapter} 
              onChange={(e) => onChapterChange(chapter, e.target.checked)} 
            />
            {chapter}
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default TaskFilter;
