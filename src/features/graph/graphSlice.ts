import { createSlice } from "@reduxjs/toolkit";

type SliceState = {};
const initialState: SliceState[] = [];

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    addGraphData() {},
  },
});

export const { addGraphData } = graphSlice.actions;

export default graphSlice.reducer;
