import axios from 'axios';

      const method_controller = async (url, method, dat) => {

        method = method.toLowerCase();

        const token = localStorage.getItem('token');
        
        const config = {
          headers: {
            'Content-Type': 'application/JSON',
            'Authorization': `Bearer ${token}`
        }
      }
              
        return await axios[method](`http://localhost:3000/${url}`, dat, config)
      
    };
  

export default method_controller;
