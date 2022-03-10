/* eslint-disable no-useless-return */
/* eslint-disable react/react-in-jsx-scope */

// react-router-dom
import { NavLink, Outlet, useLocation } from 'react-router-dom'

// react
import { useEffect, useRef } from 'react'

// components gobals
import Footer from '../components/global/Footer'

// style Menu
import '../styles/layouts/Menu.style.css'

const Menu = () => {
  const refMenu = useRef()
  const location = useLocation()
  console.log(location, location.pathname === '/' ? 'active-item-menu' : '')

  const showMenu = () => {
    if (!refMenu) return
    if (scrollY > 0) {
      refMenu.current.classList.remove('menu-top')
      refMenu.current.classList.add('container-menu')
    } else {
      refMenu.current.classList.remove('container-menu')
      refMenu.current.classList.add('menu-top')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showMenu)
  }, [])
  return (
    <div className='container'>
        <div ref={refMenu} className='menu-top'>
          <nav className='nav-menu'>
            <ul className='list-menu'>
             <li className={location.pathname === '/proyects' ? 'active-menu item-menu' : 'item-menu'}>
                <NavLink to='/proyects'>proyectos</NavLink>
              </li>
             <li className={location.pathname === '/' ? 'active-menu item-menu' : 'item-menu'}>
                <NavLink to='/'>About</NavLink>
             </li>
            </ul>
          </nav>
        </div>
        {}
        <div className='container-outlet'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Menu
