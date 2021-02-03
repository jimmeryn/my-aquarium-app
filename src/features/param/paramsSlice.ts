import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  name: string,
  value: number,
  date: Date,
  aquariumId: number,
};
const initialState: SliceState[] = require("api/db.json").params;

const paramSlice = createSlice({
  name: "param",
  initialState,
  reducers: {
    addParam(
      state,
      action: PayloadAction<{
        name: string,
        value: number,
        date: Date,
        aquariumId: number,
      }>
    ) {
      const { name, value, date, aquariumId } = action.payload;
      state.push({ name, value, date, aquariumId });
    },
  },
});

export const { addParam } = paramSlice.actions;

export default paramSlice.reducer;
