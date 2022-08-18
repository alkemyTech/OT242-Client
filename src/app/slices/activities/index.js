import { createSlice } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import {getReq} from '../../../helpers/ReqToApi';


export const activitySlice = createSlice({

    name: 'activity',
    initialState: {
      activityList: [],
    },
    reducers: {   
      getActivity: (state, action) => {
        state.activityList = action.payload;
      }
    }
  })

  export const { getActivity } = activitySlice.actions;

  export default activitySlice.reducer;

  export const loadActivities = () => async (dispatch) => {
    
    try {
        const response = await getReq(`/admin/activities`);

        dispatch(getActivity(response.data))
      } catch (err) {
        console.log(err);
      }
    };


