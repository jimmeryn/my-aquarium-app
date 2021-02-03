import * as React from "react";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const AddButtonComponent: React.FunctionComponent<{
  className: string;
  name: string;
  value?: number | string;
  handleOnClick?: () => void;
}> = ({ className, handleOnClick, name, value }) => (
  <ListItem divider dense>
    <ListItemText className={className} primary={name} secondary={value} />
    <Button>
      <AddIcon
        onClick={(e) => {
          e.preventDefault();
          if (handleOnClick) handleOnClick();
        }}
      />
    </Button>
  </ListItem>
);

const AddButton = styled(AddButtonComponent)`
  color: var(--light-grey-1);
  padding-right: 0;
  margin-right: 0;
  p {
    color: white;
  }
`;

export default AddButton;
