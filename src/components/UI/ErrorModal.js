import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onCloseModal} />;
}

function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal}>닫기</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
