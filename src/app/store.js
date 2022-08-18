import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userAuth/index'
//import activityReducer from './slices/activities/activitiesSlice';
import activity from './slices/activities/index';
import members from './slices/members';
import testimonials from './slices/testimonials';
import news from './slices/news';

export default configureStore({
  reducer: {
    user: userReducer,
    //activity: activityReducer,
    activity,
    members,
    testimonials,
    news  
  },
});
