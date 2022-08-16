import { createSlice } from '@reduxjs/toolkit';
import {getReq} from '../../../helpers/ReqToApi';


export const newsSlice = createSlice({
    name: 'news',
    initialState: {
      newsList: [],
    },
    reducers: {   
      setNews: (state, action) => {
        state.newsList = action.payload;
      }
    }
  })

  export const { setNews } = newsSlice.actions;

  export default newsSlice.reducer;

  export const loadNews = () => async (dispatch) => {
    
    try {
        const response = await getReq(`/admin/news`);

        dispatch(setNews(response.data))
      } catch (err) {
        console.log(err);
      }
    };


