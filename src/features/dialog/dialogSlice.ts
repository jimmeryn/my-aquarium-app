import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum DialogType {
  addParam = "addParam",
  addRefill = "addRefill",
  addAquarium = "addAquarium",
  closed = "closed",
}

const initialState = DialogType.closed;

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<{ type: DialogType }>) => {
      if (state !== action.payload.type) {
        return action.payload.type;
      }
      return state;
    },
    closeDialog: () => DialogType.closed,
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
