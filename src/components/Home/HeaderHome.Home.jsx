/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

// components global
import MachineWrite from '../global/MachineWrite'

// style local
import '../../styles/views/Home/HeaderHome.style.css'

const HeaderHome = () => {
  const menssage = ['Ideas', 'Planes', 'Imaginacion', 'Web']

  return (
    <div className='container-header-home'>
      <div className="about-header-home">
        <div className="write-machine">
          <MachineWrite menssage={menssage} base='Desarrolla tu ' timeWrite={150} timeDelete={120} lop={false} />
        </div>

        <div className='phrase-header-home'>
          <p>
            <span className='text-red-500'>"</span> Programar no es facil, pero eso no
            significa que no vallas hacer un buen programador(a) <span className='text-red-500 text-lg'>"</span>
          </p>
        </div>
      </div>

      <div className='me-profile-header-home'>
        <img src='https://res.cloudinary.com/dqmkovsdy/image/upload/v1646439326/portafoli/multimedia/img/me2_ruvzkc.png' />
      </div>
    </div>
  )
}

export default HeaderHome
