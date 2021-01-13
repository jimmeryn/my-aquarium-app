import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SliceState = { name?: string, size: number, startDate: Date };
const initialState: SliceState[] = [];

const aquariumSlice = createSlice({
  name: "aquarium",
  initialState,
  reducers: {
    addAquarium(state, action: PayloadAction<{ name?: string, size: number, startDate: Date }>) {
      const { name, size, startDate } = action.payload
      state.push({ name, size, startDate })
    }
  }
})

export const { addAquarium } = aquariumSlice.actions

export default aquariumSlice.reducer