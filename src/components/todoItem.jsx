import { useState } from "react";

export default function TodoItem() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue.length > 0) {
      setTodoItem([...todoItem, inputValue]);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    const newTodoItem = [...todoItem];
    newTodoItem.splice(index, 1);
    setTodoItem(newTodoItem);
  }

  return (
    <div>
      <h2>Список задач на сегодня</h2>
      <div>
        <input
          placeholder="Запишите задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btnToDo" onClick={handleAddTodo}>
          Добавить
        </button>
      </div>
      <ol className="olToDo">
        {todoItem.map((todoItem, index) => (
          <li className="liToDo" key={todoItem}>
            {todoItem}{" "}
            <button className="btnToDo" onClick={() => handleDelete(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
