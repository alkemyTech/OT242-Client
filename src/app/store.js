import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userAuth/index'

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
