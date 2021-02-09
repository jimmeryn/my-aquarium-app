import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Param } from "models";

const initialState: Param[] = require("api/db.json").params;

const paramSlice = createSlice({
  name: "param",
  initialState,
  reducers: {
    addParam(
      state,
      action: PayloadAction<{
        name: string;
        value: number;
        date: string;
        aquariumId: number;
      }>
    ) {
      const { name, value, date, aquariumId } = action.payload;
      state.push({ name, value, date: new Date(date).toJSON(), aquariumId });
    },
    addParams(
      state,
      action: PayloadAction<{
        names: string[];
        values: number[];
        date: string;
        aquariumId: number;
      }>
    ) {
      // Add multiple params
    },
  },
});

export const { addParam, addParams } = paramSlice.actions;

export default paramSlice.reducer;
