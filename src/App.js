/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom'
import Menu from './layouts/Menu.layout'

import Home from './views/Home.view'
import Proyects from './views/Proyects.view'

import './app.css'

function App () {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Menu />}>
        <Route index path='/' element={<Home />} />
        <Route path='/proyects' element={<Proyects />} />
       </Route>
     </Routes>
    </div>
  )
}

export default App
