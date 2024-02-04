import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profile.reducer";
import cartReducer from "./reducers/cart.reducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
  },
});

export default store;
