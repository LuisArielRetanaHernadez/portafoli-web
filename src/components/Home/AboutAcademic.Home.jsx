/* eslint-disable react/react-in-jsx-scope */

// style of AboutAcademic
import '../../styles/views/Home/AboutAcademic.style.css'
import ManchineWrite from '../global/MachineWrite'

const AboutAcademic = () => {
  const menssage = 'Les comparto los modulos que he por tener y que estoy cursando, posteriol mente estoy cursando el modulo 3(node js) estoy en la mitad de ese modulo, por lo cual estare aprediendo nuevas tecnologias y metologias con node js '

  return (
        <div className='about-academic'>
            <div className='introduction-academic'>
                <ManchineWrite menssage={menssage} timeWriter={50} lop={false} classWrite={false}/>
            </div>
            <div className='content-about-academic'>
                <div className='content_primary_about_academic'>
                    <div className='item-primary'>
                        <h3>Modulo 1</h3>
                        <p>
                            Html, Javascript, css
                        </p>
                    </div>
                    <div className='item-primary'>
                        <h3>Modulo 3</h3>
                        <p>
                            Node js, Express, Postgresql, Sequelize, Heroku, JWT,
                            Postman, patron MVC
                        </p>
                    </div>
                    <div className='item-primary'>
                        <h3>Modulo 5</h3>
                        <p>
                            Algoritmo, estructura de datos basica
                        </p>
                    </div>
                </div>
                <div className='content_secondary_about_academic'>
                    <div className='item-secondary'>
                        <h3>Modulo 2</h3>
                        <p>
                            React js, Redux, ract-router-dom,
                            Tailwind, Jest
                        </p>
                    </div>
                    <div className='item-secondary'>
                        <h3>Modulo 4</h3>
                        <p>
                            Python, Django, ORM, Serializadores, APIViews, ModelViewsets,
                        </p>
                    </div>
                    <div className='item-secondary'>
                        <h3>Modulo 6</h3>
                        <p>
                            Algoritmo de busqueda y ordenamiento/Arbole y Grafos,
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutAcademic
