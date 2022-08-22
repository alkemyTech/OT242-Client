import { Navigate } from 'react-router-dom';

const NotLoggedRoute = ({children}) => {
    let token = localStorage.getItem('token');

    return token ? children : <Navigate to="/"/>;
        

}

export default NotLoggedRoute;