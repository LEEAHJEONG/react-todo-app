import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/Todoinsert";

function App() {
  // const [value, setValue] = useState("");

  // const onChange = event => {
  //   setValue(event.target.value);
  // };

  // const onSubmit = (event)=>{
  //   // submit 이벤트는 브라우저에서 새로고침 발생시킴
  //   // 이를 방지하기 위해 아래 함수 호출
  //   event.preventDefault();
  //   setValue("");
  // }

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoListItem />
    </TodoTemplate>
  );
}

export default App;
