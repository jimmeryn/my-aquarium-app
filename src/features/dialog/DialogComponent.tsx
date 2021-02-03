import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { StyledButton } from "../../components/buttons/Button";
import styles from "./Dialog.module.scss";

const DialogComponent: React.FunctionComponent<{
  title: string;
  isDialogOpen: boolean;
  submitHandle: () => void;
  closeDialog: () => {
    payload: undefined;
    type: string;
  };
}> = ({ title, isDialogOpen, submitHandle, closeDialog, children }) => {
  const wrapper = useRef<HTMLDivElement>(null) as any;

  useEffect(() => {
    const dialogBackground = wrapper.current;
    const dialog = wrapper.current.children[0];

    gsap.set([dialog, dialogBackground], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (isDialogOpen) {
      tl.to(dialogBackground, { duration: 0.2, autoAlpha: 1 }).fromTo(
        dialog,
        { x: "-=1000", scale: 0.3 },
        { x: "+=1000", autoAlpha: 1, scale: 1, duration: 0.3 },
        "-0.1"
      );
    }
  }, [isDialogOpen]);

  return (
    <div
      className={styles.dialogBackground}
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          closeDialog();
        }
      }}
      ref={wrapper}
    >
      <div className={styles.dialog}>
        <h1 className={styles.dialogTitle}>{title}</h1>
        {children}
        <StyledButton
          className={styles.dialogButton}
          handleOnClick={submitHandle}
        >
          {"Submit"}
        </StyledButton>
      </div>
    </div>
  );
};

export default DialogComponent;
