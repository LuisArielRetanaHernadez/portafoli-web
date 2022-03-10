/* eslint-disable react/react-in-jsx-scope */

// style of Footer
import '../../styles/components/global/Footer.style.css'

const Footer = () => {
  return (
        <div className='container-footer'>
            <div className='footer-author'>
                <ul className='list-author'>
                    <li className='item-author'>
                        &copy; Luis Ariel Retana Hernandez
                    </li>
                </ul>
            </div>
            <div className='footer-contact'>
                <ul className='list-footer-contact'>
                    <li className='item-footer-contact'>
                        Contactos:
                    </li>
                    <li className='item-footer-contact'>
                        tel: <a href='tel: 7778317896'> 7778317896 </a>
                    </li>
                    <li className='item-footer-contact'>
                        <a href="https://www.linkedin.com/in/luis-ariel-retanan-hernandez-b89334221/" title="linkedin Luis Ariel Retana Hernandez" target='_blank' rel="noreferrer">
                            <img src='https://res.cloudinary.com/dqmkovsdy/image/upload/v1646812378/portafoli/multimedia/iconos/linkedin_socialnetwork_17441_z3dtee.ico' />
                        </a>
                    </li>
                    <li className='item-footer-contact'>
                        <a href='mailto:regalomessi10@gmail.com' title='gmail regalomessi@gmail.com' target='_blank' rel="noreferrer">
                            <img src='https://res.cloudinary.com/dqmkovsdy/image/upload/v1646813663/portafoli/multimedia/iconos/Gmail_29991_mz2h4e.ico' />
                        </a>
                    </li>
                    <li className='item-footer-contact'>
                        <a href='https://github.com/LuisArielRetanaHernadez' title='github luisarielretanahernandez' target='_blank' rel="noreferrer">
                            <img src='https://res.cloudinary.com/dqmkovsdy/image/upload/v1646813663/portafoli/multimedia/iconos/github_git_icon_145985_iqyk8h.ico' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
