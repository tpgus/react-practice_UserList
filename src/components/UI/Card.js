// import styled from "styled-components";

// const CardRayout = styled.div`
//   background: white;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//   border-radius: 12px;
// `;

// function Card(props) {
//   return <CardRayout className={props.className}>{props.children}</CardRayout>;
// }

import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
