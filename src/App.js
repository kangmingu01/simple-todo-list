import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      // 비어있으면 작동하지 않도록
      return;
    }
    // currentArray = 새로운 배열을 만들어서
    // 내 생각에 비어있는 toDos랑 currentArray랑 같은거 같음
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 안비어있고 엔터치면 input이 비어있을 수 있도록
    setToDo("");
  };
  console.log(toDos);

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
          // map으로 배열의 요소를 하나씩(item) 가져와서 li에 추가
        ))}
      </ul>
    </div>
  );
}

export default App;
