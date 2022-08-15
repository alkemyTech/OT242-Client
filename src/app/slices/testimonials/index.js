import { createSlice } from '@reduxjs/toolkit';
import {getReq} from '../../../helpers/ReqToApi';


export const TestimonialSlice = createSlice({
    name: 'testimonials',
    initialState: {
      testimonialList: [],
    },
    reducers: {   
      setTestimonial: (state, action) => {
        state.testimonialList = action.payload;
      }
    }
  })

  export const { setTestimonial } = TestimonialSlice.actions;

  export default TestimonialSlice.reducer;

  export const loadTestimonials = () => async (dispatch) => {
    
    try {
        const response = await getReq("/testimonials");

        dispatch(setTestimonial(response.data))
      } catch (err) {
        console.log(err);
      }
    };


