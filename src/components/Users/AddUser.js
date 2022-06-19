import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [error, setError] = useState();

  function submitHandler(e) {
    e.preventDefault();

    if (enteredUserName.trim().length === 0) {
      setIsNameValid(false);
      setError({
        title: "올바른 값을 입력하세요",
        message: "알맞은 Username을 입력해 주세요",
      });
      return;
    }

    if (enteredUserAge.trim().length === 0 || +enteredUserAge < 1) {
      setIsAgeValid(false);
      setError({
        title: "올바른 값을 입력하세요",
        message: "알맞은 Age를 입력해 주세요",
      });
      return;
    }
    props.onAddUser({
      name: enteredUserName,
      age: enteredUserAge,
    });
    setEnteredUserAge("");
    setEnteredUserName("");
  }

  function userNameHandler(e) {
    if (e.target.value.trim().length > 0) {
      setIsNameValid(true);
    }
    setEnteredUserName(e.target.value);
  }

  function userAgeHandler(e) {
    if (e.target.value.trim().length > 0 && +e.target.value.trim() > 0) {
      setIsAgeValid(true);
    }
    setEnteredUserAge(e.target.value);
  }

  function closeModalHandler() {
    setError();
  }

  return (
    <div>
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
            value={enteredUserName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            className={`userage ${!isAgeValid && styles.invalid}`}
            type="number"
            value={enteredUserAge}
            onChange={userAgeHandler}
          ></input>
          <Button type="submit">추가</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
