import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
    user : null,
};
 
export const authSlice = createSlice({
  name: "authentication",
  initialState : initialStateAuth,
  reducers: {
    login: (state, action) => {
      //console.log('Add Action 1',state,'Action : ', action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
      // state.data.filter(item=>item._id===action.payload).addToCart=true
      console.log('authentication Action 2',state.user, 'Action :',action);
    },
    logout: (state) => {
        state.user = null;
    } 
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
