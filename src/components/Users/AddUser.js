import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [error, setError] = useState();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const eneteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setIsNameValid(false);
      setError({
        title: "올바른 이름을 입력하세요",
        message: "공백을 제외하고 한 글자 이상을 입력해야 합니다.",
      });
      return;
    }

    if (eneteredAge.trim().length === 0 || +eneteredAge < 1) {
      setIsAgeValid(false);
      setError({
        title: "올바른 나이를 입력하세요",
        message: "나이는 1 이상의 숫자만 입력할 수 있습니다.",
      });
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: eneteredAge,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function closeModalHandler() {
    setError();
  }

  return (
    //Fragment , <> 와 같은 역할을 하는 Wrapper 컴포넌트
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className={`username ${!isNameValid && styles.invalid}`}
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            className={`userage ${!isAgeValid && styles.invalid}`}
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">추가</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
