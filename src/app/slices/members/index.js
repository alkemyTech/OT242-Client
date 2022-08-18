import { createSlice } from '@reduxjs/toolkit';
import {getReq} from '../../../helpers/ReqToApi';


export const memberSlice = createSlice({
    name: 'members',
    initialState: {
      membersList: [],
      loaderM: false,
    },
    reducers: {   
      setMembers: (state, action) => {
        state.membersList = action.payload;
      }
    }
  })

  export const { setMembers } = memberSlice.actions;

  export default memberSlice.reducer;

  export const loadMembers = () => async (dispatch) => {
    
    try {
        const response = await getReq(`/admin/members`);

        dispatch(setMembers(response.data))
      } catch (err) {
        console.log(err);
      }
    };


