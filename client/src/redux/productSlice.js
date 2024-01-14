import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsOperation";

const initialState = {
  monitors: [],
  keyboards: [],
  cpu: [],
};

const getProductsHandle = (state, action) => {
  state.monitors = action.payload.data[0].monitors;
  state.keyboards = action.payload.data[0].keyboards;
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getProducts.fulfilled, getProductsHandle),
});

// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
