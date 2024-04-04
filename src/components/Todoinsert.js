import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
    //  console.log("입력하는 중", value);
  };

  const onSubmit = event => {
    onInsert(value);
    // submit 이벤트는 브라우저에서 새로고침 발생시킴
    // 이를 방지하기 위해 아래 함수 호출
    event.preventDefault();
    setValue("");
  };
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button type="Submit">
        {/* 리액트 아이콘 */}
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
