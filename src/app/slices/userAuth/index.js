import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


const initialState = {
  user: null
}

// get data from localstorage
localStorage.getItem('dataUser002')
? (initialState.user = JSON.parse(localStorage.getItem('dataUser002')) )
: (initialState.user = null)



export const userAuthSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {   

    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('dataUser002')
      localStorage.removeItem('token')
      window.location.reload();
      state.user = null
    }
  }

})

export const { login, logout } = userAuthSlice.actions;

export const selectUser = (state) => state.user.user

export default userAuthSlice.reducer;
