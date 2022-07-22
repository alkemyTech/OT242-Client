import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import userLogged from './slices/userLogged/index';

export default configureStore({
  reducer: {
    counter: counterReducer,
    userLogged
  },
});
