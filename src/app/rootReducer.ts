import { combineReducers } from '@reduxjs/toolkit'
import paramSlice from 'features/param/paramsSlice';
import aquariumSlice from 'features/aquarium/aquariumsSlice';


const rootReducer = combineReducers({
  paramSlice,
  aquariumSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer