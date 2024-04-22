import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from '../src/pages/Landingpage'
import Home from '../src/pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return (
    <> 
    <Header/>
    <Routes>
      {/* slash symbol represents the base url */}
      <Route path='/' element={<Landingpage/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<Watchhistory/>} />

    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
