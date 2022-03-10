/* eslint-disable react/react-in-jsx-scope */

// style of PresentationMe
import '../../styles/views/Home/PresentationMe.style.css'
import MyPhoto from '../global/MyPhoto'

const PresentationMe = () => {
  return (
    <div className='presentation-me'>
        <div className='presentation-basic general-presentation'>
          <div className='date-basic'>
            <h3>Nombre</h3>
            <p>Luis Ariel Retana Hernandez</p>
          </div>
          <div className='date-basic'>
            <h3>Nacionalidad(s)</h3>
            <p>Mexicana</p>
          </div>
          <div className='date-basic'>
            <h3>Idioma(s)</h3>
            <p>Español Nativo</p>
          </div>
          <div className='date-basic'>
            <h3>Experiencia</h3>
            <p>Proyectos Academicos</p>
          </div>
          <div className='date-basic'>
            <h3>Localidad</h3>
            <p>Xochitepec/Mor/Mex</p>
          </div>
        </div>
        <div className='presentation-about general-presentation'>
          <div className='container-my-photo'>
            <MyPhoto />
          </div>
          Hola, soy Luis Ariel Retana Hernandez desarrollador full-stack he
          trabajo en proyectos con las tecnologia html, css, js, react js,
          y node js(express) con postgresql entre otras mas. he creado proyectos como
          buscador de paises, una app de rick y morty, app de clima,
          ToDo en el front-end tanto como en el back-end, entre otros.
          actualmente soy estudiante de academlo partiendo en el modulo
          de node js
        </div>
    </div>
  )
}

export default PresentationMe
