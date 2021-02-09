import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Aquarium } from "models";

const initialState: Aquarium[] = require("api/db.json").aquariums;

const aquariumSlice = createSlice({
  name: "aquarium",
  initialState,
  reducers: {
    addAquarium(
      state,
      action: PayloadAction<{ name?: string; size: number; startDate: string }>
    ) {
      const { name, size, startDate } = action.payload;

      state.push({
        name: name && name.length > 0 ? name : undefined,
        size,
        params: [],
        startDate: new Date(startDate).toJSON(),
      });
    },
  },
});

export const { addAquarium } = aquariumSlice.actions;

export default aquariumSlice.reducer;
