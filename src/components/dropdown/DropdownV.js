import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'

function VisionBtn() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" className="dropdown-basic">
        Nuestra vision
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <p className='drop_text'>Mejorar la calidad de vida de niños y familias en situación de
vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.</p>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default VisionBtn;