import "./App.css";
// import Header from "./components/Header.jsx"
// import Button from './components/Button.jsx'
//import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  // 부모 컴포넌트

  return (
    <>
      <HookExam />
    </>
  );

  // return (
  //   <>
  //     <Bulb />
  //     <Counter />
  //   </>
  // )

  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // }

  //return (

  //  <>
  // {/* <Header />
  // <Main />
  // <Footer /> */}
  // {/* <Button {...buttonProps}/>
  // <Button text={"카페"}/>
  // <Button text={"블로그"}>
  //   <div>자식 요소</div>
  //   <Header />
  // </Button> */}
  //  </>
  //)
}

export default App;
