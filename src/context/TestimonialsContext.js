import React from "react";
import { useState, createContext, useEffect } from "react";
import { getReq } from "../helpers/ReqToApi";


export const TestimonialsContext = createContext()

const TestimonialsContextProvider = ({children}) => {
  
  const [loadingt, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials();
  }, []);
  
  const getTestimonials = async () => {
    try {
      setLoading(true);
      const res = await getReq("/testimonials");
      const data = await res.data;
      setTestimonials(data);
      setLoading(false);
    } catch (err) {
      return <h1 className="activity-container">ERROR</h1>;
    }
  };

    const data = { testimonials, loadingt }

    return (
        <TestimonialsContext.Provider value={data}>
            {children}
        </TestimonialsContext.Provider>
    )

}

export default TestimonialsContextProvider;