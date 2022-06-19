import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
  //버튼의 type도 커스텀 Button 컴포넌트를 사용하는 위치에서 받아와서 동적으로 지정한다.
  //type이 지정되지 않을 경우에도 type이 지정될 수 있도록 || 연산자를 이용해 기본 타입 'button' 을 정의해 준다.
  //클릭 이벤트를 다루기 위한 핸들러 함수도 props로 전달받아 사용한다.
}

export default Button;
