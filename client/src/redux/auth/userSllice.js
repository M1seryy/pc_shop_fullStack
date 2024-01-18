import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "./userOperations";

const initialState = {
  userData: null,
};

const userReg = (state, action) => {
    console.log('action: ', action);
};

export const productSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(userRegister.fulfilled, userReg),
});

// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
