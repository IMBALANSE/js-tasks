import React, { useState, useEffect } from 'react';
import { tasks as initialTasks, saveTasks } from './data/Tasks';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskList from './components/TaskList/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './styles/main.css';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [randomTaskMode, setRandomTaskMode] = useState(false);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Получаем все уникальные темы из задач
  const availableTopics = [...new Set(tasks.map(task => task.topic))];
  console.log(availableTopics);

  // Получаем все уникальные темы из задач
  const availableChapters = [...new Set(tasks.map(task => task.chapter))];
  console.log(availableChapters);
  
  
  // Обновляем отфильтрованные задачи при изменении
  useEffect(() => {
    filterTasks();
  }, [tasks, randomTaskMode, selectedSources, selectedTopics, selectedChapters]);

  const filterTasks = () => {
    let result = tasks;
    
    if (selectedSources.length > 0) {
      result = result.filter(task => selectedSources.includes(task.source));
    }
    
    if (selectedTopics.length > 0) {
      result = result.filter(task => selectedTopics.includes(task.topic));
    }

    if (selectedChapters.length > 0) {
      result = result.filter(task => selectedChapters.includes(task.chapter));
    }
    
    if (randomTaskMode && result.length > 0) {
      const randomIndex = Math.floor(Math.random() * result.length);
      result = [result[randomIndex]];
    }
    
    setFilteredTasks(result);
  };
  
  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setShowAddForm(false);
  };
  
  // ... остальные обработчики остаются без изменений


    
    // Фильтрация задач
    // useEffect(() => {
    //   let result = tasks;
      
    //   // Фильтр по источникам
    //   if (selectedSources.length > 0) {
    //     result = result.filter(task => selectedSources.includes(task.source));
    //   }
      
    //   // Фильтр по темам
    //   if (selectedTopics.length > 0) {
    //     result = result.filter(task => selectedTopics.includes(task.topic));
    //   }

    //   // Фильтр по Главам
    //   if (selectedChapters.length > 0) {
    //     result = result.filter(task => selectedChapters.includes(task.chapter));
    //   }      
      
    //   // Режим случайной задачи
    //   if (randomTaskMode && result.length > 0) {
    //     const randomIndex = Math.floor(Math.random() * result.length);
    //     result = [result[randomIndex]];
    //   }
      
    //   setFilteredTasks(result);
    // }, [randomTaskMode, selectedSources, selectedTopics, selectedChapters]);
    
    const handleRandomTask = (isRandom) => {
      setRandomTaskMode(isRandom);
    };
    
    const handleSourceChange = (source, isChecked) => {
      setSelectedSources(prev => 
        isChecked 
          ? [...prev, source] 
          : prev.filter(s => s !== source)
      );
    };
    
    const handleTopicChange = (topic, isChecked) => {
      setSelectedTopics(prev => 
        isChecked 
          ? [...prev, topic] 
          : prev.filter(t => t !== topic)
      );
    };

    const handleChapterChange = (chapter, isChecked) => {
      setSelectedChapters(prev => 
        isChecked 
          ? [...prev, chapter] 
          : prev.filter(ch => ch !== chapter)
      );
    };
  return (
    <div className="app">
      <h1>Задачник</h1>
      <div className="header-actions">
        <button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Скрыть форму' : 'Добавить задачу'}
        </button>
      </div>
      
      {showAddForm && <AddTaskForm onAddTask={handleAddTask} />}
      
      <div className="container">
        <TaskFilter 
          onRandomTask={handleRandomTask}
          onSourceChange={handleSourceChange}
          onTopicChange={handleTopicChange}
          onChapterChange={handleChapterChange}
          availableTopics={availableTopics}
          availableChapters ={availableChapters}
        />
        <div className="content">
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;

