import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let dataUser = JSON.parse(localStorage.getItem('dataUser002'));

    return dataUser && dataUser.roleId === 1 ? children : <Navigate to="/login"/>;
        

}

export default PrivateRoute;