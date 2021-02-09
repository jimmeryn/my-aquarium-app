import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { StyledButton } from "../../components/buttons/Button";
import styles from "./Dialog.module.scss";
import CloseButton from "components/buttons/CloseButton";
import { useDispatch } from "react-redux";
import { closeDialog } from "./dialogSlice";

const DialogComponent: React.FunctionComponent<{
  title: string;
  submitHandle: () => void;
}> = ({ title, submitHandle, children }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (wrapper.current) {
      const dialogBackground = wrapper.current;
      const dialog = wrapper.current.children[0];

      gsap.set([dialog, dialogBackground], { autoAlpha: 0 });
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.to(dialogBackground, { duration: 0.2, autoAlpha: 1 }).fromTo(
        dialog,
        { x: "-=1000", scale: 0.3, autoAlpha: 0 },
        { x: "+=1000", scale: 1, autoAlpha: 1, duration: 0.3 },
        "-0.1"
      );
    }
  }, []);

  return (
    <div
      className={styles.dialogBackground}
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          dispatch(closeDialog());
        }
      }}
      ref={wrapper}
    >
      <div className={styles.dialog}>
        <div className={styles.dialogTitleWrapper}>
          <CloseButton
            className="close-button"
            handleOnClick={() => dispatch(closeDialog())}
          />
          <h1 className={styles.dialogTitle}>{title}</h1>
        </div>
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
