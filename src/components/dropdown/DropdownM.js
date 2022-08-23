import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'

function MisionBtn() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" className="dropdown-basic">
        Nuestra mision
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <p className='drop_text'>Trabajar articuladamente con los distintos aspectos de la vida de las
familias, generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.</p>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MisionBtn;