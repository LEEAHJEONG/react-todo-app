import { useRef, useState } from "react";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/Todoinsert";

const initState = [
  {
    // id: 고유의 (식별)번호
    // 같은 text라면 식별해주기 위해
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false,
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이여야 한다.
  const nextId = useRef(4);

  // todos 배열에 새 객채 추가
  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  // 삭제 기능
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
