import { Navigate } from 'react-router-dom';

const LoggedRoute = ({children}) => {
    let token = localStorage.getItem('token');

    return !token ? children : <Navigate to="/"/>;
        

}

export default LoggedRoute;