import { createSlice, PayloadAction } from '@reduxjs/toolkit'

enum DialogType {
    addParam = "addParam",
    addRefill = "addRefill",
    addAquarium = "addAquarium",
    closed = "closed"
}

type SliceState = { isOpen: boolean, type?: DialogType };
const initialState: SliceState = {isOpen: false, type: DialogType.closed};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    changleDialogState(state, action: PayloadAction<{ isOpen: boolean, type?: DialogType }>) {
        const {isOpen, type} = action.payload;
            state = { isOpen, type }
    },
    closeDialog(state) {
        state = { isOpen: false, type: DialogType.closed }
    }
  }
})

export const { changleDialogState, closeDialog } = dialogSlice.actions

export default dialogSlice.reducer