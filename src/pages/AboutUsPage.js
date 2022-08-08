import { React, useState, useEffect } from 'react';
import MemberCard from '../../components/cards/members_card/MemberCard';
import getReq from '../helpers/ReqToApi'


const AboutUsPage = (props) => {


    const [loading, setLoading] = useState(false);
    const [members, setMembers] = useState([]);

    useEffect (() => {
      const loadMembers = async () => {
        setLoading (true);
        const response = await getReq(`/admin/news`);
        setMembers(response);
        setLoading(false);
      };

      loadMembers();

    }, []);


    return (
        <div>

        {loading ? (
          <p>Cargando...</p>
        ) : (
            members.map(item => <MemberCard key={item.id}
              name={item.name} image={`../../public/images/Miembros_del_equipo/${item.name}.jpg`}
               />)
        )}
           <h1>test</h1>
        </div>
    )
}

export default AboutUsPage;