import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null
}

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
  loadeperson:(state,action)=>{
    state.info=action.payload
  },
  removeperson:(state,action)=>{
        state.info=null;
  }  

}

    
})


export const { loadeperson, removeperson } = personSlice.actions

export default personSlice.reducer