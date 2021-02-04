import React from "react";
import styled from "styled-components";
import Input from "./Input";

const DatePickerComponent: React.FunctionComponent<{
  className: string;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  label?: string;
}> = ({ className, selectedDate, setSelectedDate, label }) => {
  // const handleDateChange = (date: Date | null) => {
  //   if (date) {
  //     setSelectedDate(date);
  //   }
  // };

  return <Input type="date" className={className} />;
};

const DatePicker = styled(DatePickerComponent)`
  width: 50%;
  height: 7vh;
  color: white;
  border-bottom: solid 2px var(--dark-grey-1);
  opacity: 1;
  :hover {
    opacity: 0.8;
    border-bottom: solid 2px var(--navbar-color);
  }
`;

export default DatePicker;
