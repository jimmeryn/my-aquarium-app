import { combineReducers } from '@reduxjs/toolkit'
import paramSlice from 'features/param/paramsSlice';
import aquariumSlice from 'features/aquarium/aquariumsSlice';
import dialogSlice from 'features/dialog/dialogSlice';
import graphSlice from 'features/graph/graphSlice';


const rootReducer = combineReducers({
  paramSlice,
  aquariumSlice,
  dialogSlice,
  graphSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer