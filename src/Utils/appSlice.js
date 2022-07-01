import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen:"home",
  modalVissible:false,
};

export const appSlice = createSlice({
  name:"data",
  initialState:initialState,
  reducers:{
    setScreen(state, action){
      state.screen = action.payload;
    },
    setModalVissible(state, action){
      state.modalVissible = action.payload;
    },
  },

});

export const{setScreen, setModalVissible} = appSlice.actions

export default appSlice.reducer;