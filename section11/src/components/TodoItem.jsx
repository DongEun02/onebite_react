import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// memo는 두 번째 인자로 콜백 함수를 받을 수 있음
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);

// 보통 리액트 앱을 최적화할 때는 하나의 프로젝트를 거의 완성한 상태에서 최적화를 하게 됨
// 기능 구현을 먼저 완료한 후, 마지막에 최적화하는 것을 권장
// Header 컴포넌트처럼 사소한 컴포넌트들까지 다 최적화를 하진 않음
// TodoItem 컴포넌트처럼 유저의 행동에 따라서 개수가 많아질 수 있는 컴포넌트
// 또는 이벤트 함수를 많이 가지고 있어서 코드가 무거운 컴포넌트
// 에 한해서만 최적화를 해주는 게 나음
