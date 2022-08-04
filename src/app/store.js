import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userAuth/index'
import activityReducer from './slices/activities/activitiesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    activity: activityReducer,
  },
});
