import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../components/buttons/Button";
import styles from "./Dialog.module.css";

const DialogComponent: React.FunctionComponent<{
  className: string;
  title: string;
  submitHandle: () => void;
  isOpen: boolean;
}> = ({ className, title, submitHandle, children, isOpen }) => (
  <React.Fragment>
    {isOpen ? (
      <div className={className}>
        <h1 className={styles.dialogTitle}>{title}</h1>
        {children}
        <StyledButton
          className={styles.dialogButton}
          handleOnClick={submitHandle}
        >
          {"Submit"}
        </StyledButton>
      </div>
    ) : null}
  </React.Fragment>
);

const Dialog = styled(DialogComponent)`
  visibility: visible;
  width: 30vw;
  min-width: 400px;
  height: 80vh;
  background-color: #232f3e;
  border-radius: 15px;
  position: fixed;
  text-align: center;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 70%;
    height: 8vh;
    margin-bottom: 10vh;
  }
`;

export default Dialog;
