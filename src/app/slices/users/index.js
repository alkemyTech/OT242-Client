import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: {
    currentUser: {}
  },
  reducers: {   // aca adentro van las actions
    setUserLogged: (state, action) => {
      state.currentUser = action.payload;
    }
  }
})

export default userLoggedSlice.reducer;
export const { setUserLogged } = userLoggedSlice.actions;


export const fetchUserLogged = () => {

  return (dispatch) => {
    // aca correria mi funcion axios pero falta definir el path bien
    dispatch(setUserLogged(user));

    /*
    axios
      .get('')
      .then((resp) => {
        dispatch(setUserList(resp.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
      */
  }
};

// data de prueba
const user = {
    id: 1,
    nombre: "Jose Admin",
    apellido: "Perez",
    email: "ejemplo@gmail.com",
    rol: "administrador"
}