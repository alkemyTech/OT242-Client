import React from 'react';
import AnimatedPage from '../../../components/AnimatedPage';
import './AboutUs.css'
import AnimatedPage from '../../../components/AnimatedPage';
const AboutUsPage = (props) => {
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

  return (
    <AnimatedPage>
      <div className="div_main">
        <h1>¡Nuestro Staff!</h1>

        <a href="/contact"><Button className="btn-AU" text='Quiero ser parte!' type="button"/></a>

        <div className="card_container">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            members.map((item) => (
              <MemberCard key={item.id} name={item.name} image={item.image} />
            ))
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutUsPage;
