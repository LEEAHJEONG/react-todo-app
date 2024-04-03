import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
