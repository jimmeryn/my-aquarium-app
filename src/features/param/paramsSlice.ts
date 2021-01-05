import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 type SliceState = { name: string, value: number, date: Date };
const initialState: SliceState[] = [];

const paramSlice = createSlice({
  name: "param",
  initialState,
  reducers: {
    addParam(state, action: PayloadAction<{ name: string, value: number, date: Date }>) {
      const { name, value, date } = action.payload
      state.push({ name, value, date })
    }
  }
})

export const { addParam } = paramSlice.actions

export default paramSlice.reducer