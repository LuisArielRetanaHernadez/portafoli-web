// react-router-dom v6
import { useLocation } from 'react-router-dom'
// components of view Home
import HeaderHome from '../components/Home/HeaderHome.Home'
import PresentationMe from '../components/Home/PresentationMe.Home'
import AboutAcademic from '../components/Home/AboutAcademic.Home'
// style of Home
import '../styles/views/Home.style.css'

/* eslint-disable react/react-in-jsx-scope */
const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='container-home'>
      <HeaderHome />
      <div className='container-presentation-me'>
        <PresentationMe />
      </div>
      <div className='container-about-academic'>
        <AboutAcademic />
      </div>
    </div>
  )
}

export default Home
