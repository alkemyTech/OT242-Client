
import { React, useEffect, useState } from 'react';
import MemberCard from '../../components/cards/members_card/MemberCard';
import ContactForm from '../../components/forms/Contact_form';
import { getReq } from '../../helpers/ReqToApi';
import '../ContactPage/ContactPage.css'

const ContactPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [members, setMembers] = useState([]);

    useEffect (() => {
      const loadMembers = async () => {
        setLoading (true);
        //const response = await getReq(`/admin/news`);
        const response = [
          {
            id: 1,
            name: "Gonzalo",
            image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2021/11/04/0D7921CD-4ABE-4B8F-9F2D-961C98060E86/98.jpg?crop=3500,1969,x0,y0&width=1900&height=1069&optimize=low&format=webply',
          },
          {
            id: 2,
            name: "David",
            image: './public/images/Miembros del Equipo/Rodrigo Fuente.jpg',
          },

        ]
        setMembers(response);
        setLoading(false);
      };

      loadMembers();

    }, []);


  return (
    <main className="main_contact">
      <div className="text_contact">
        <h2>Texto aleatorio</h2>

        {loading ? (
          <p>Cargando...</p>
        ) : (
            members.map(item => <MemberCard key={item.id}
              name={item.name} image={item.image}
               />)
        )}
      </div>
        
      <ContactForm />


    </main>
  );
};

export default ContactPage;
