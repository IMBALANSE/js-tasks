
// Получаем задачи из localStorage или используем начальные данные
const getInitialTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [
    {
      id: 1,
      source: 'codeWars',
      chapter: 'название главы',
      topic: 'Алгоритмы',
      title: 'Сумма двух чисел',
      description: 'Напишите функцию, которая возвращает сумму двух чисел.',
      image: 'sum_image.jpg',
      solution: 'function sum(a, b) { return a + b; }'
    },
    {
      "chapter": "Основы JS",
      "source": "LJS",
      "topic": "Привет мир",
      "title": "Вызвать alert",
      "description": "Создайте страницу, которая отобразит сообщение «Я JavaScript!».\nВыполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.",
      "image": "",
      "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n</head>\n<body>\n  <script>\n    alert( \"Я JavaScript!\" );\n  </script>\n</body>\n</html>",
      "id": 1743141009106
  },{
    "chapter": "Основы JS",
    "source": "LJS",
    "topic": "Привет мир",
    "title": "Покажите сообщение с помощью внешнего скрипта",
    "description": "Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.js, лежащий в той же папке.\nОткройте страницу, убедитесь, что оповещение работает.",
    "image": "",
    "solution": "<!DOCTYPE html>\n<html>\n<body>\n  <script src=\"alert.js\"></script>\n</body>\n</html>\n\nДля файла alert.js в той же папке:\nalert(\"Я JavaScript!\");",
    "id": 1743141237426
  },


    // другие начальные задачи...
  ];
};

// Функция для сохранения задач
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const tasks = getInitialTasks();