import React from "react";
import { useState, createContext, useEffect } from "react";
import { getReq } from "../helpers/ReqToApi";


export const MembersContext = createContext()

const MembersContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true);
      const response = await getReq(`/members`);
      
      setMembers(response.data);
      setLoading(false);
    };

    loadMembers();
  }, []);

    const data = { members, loading }

    return (
        <MembersContext.Provider value={data}>
            {children}
        </MembersContext.Provider>
    )

}

export default MembersContextProvider;