import React from "react";
import styled from "styled-components";

const DialogInputComponent: React.FunctionComponent<{
  className: string;
  value: string | number;
  handleOnChange: React.Dispatch<React.SetStateAction<any>>;
  type?: string;
}> = ({ className, value, handleOnChange, type }) => (
  <input
    className={className}
    type={type ?? "text"}
    value={value}
    maxLength={20}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
      handleOnChange(event.target.value)
    }
  />
);

const DialogInput = styled(DialogInputComponent)<{
  textAlign?: string;
  isUnit?: boolean;
}>`
  position: absolute;
  color: white;
  font-family: Poppins;
  font-size: 0.85em;
  background-color: transparent;
  text-align: ${({ textAlign }) => textAlign || "right"};
  border: none;
  height: 60%;
  bottom: 0;
  right: 0;
  width: 100%;
  align-self: center;
  margin-right: ${({ isUnit }) => isUnit && "35px"};
`;

export default DialogInput;
