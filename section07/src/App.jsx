import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // update 되는 순간에만 실행하고 싶다면 useRef를 사용
  const isMount = useRef(false);

  // 1. 마운트 : 탄생 -> 배열을 빈 배열로 놔두기 -> 딱 한 번 실행
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링 -> 배열 생략
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  // // useEffect(()=>{}, []); 배열의 값이 바뀔 때 콜백 함수 실행
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  // // 의존성 배열(dependency array = deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
