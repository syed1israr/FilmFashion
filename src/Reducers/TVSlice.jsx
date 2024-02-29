import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null
}

export const TVSlice = createSlice({
  name: 'TV',
  initialState,
  reducers: {
  loadTV:(state,action)=>{
    state.info=action.payload
  },
  removeTV:(state,action)=>{
        state.info=null;
  }  

}

    
})


export const { loadTV, removeTV } = TVSlice.actions

export default TVSlice.reducer