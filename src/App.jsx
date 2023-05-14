import {  Routes, Route } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute/HomeRoute'
import AboutUsRoute from './Routes/AboutUsRoute/AboutUsRoute'
import NavBar from './ui/views/Navbar/NavBar';
import Footer from '././ui/views/Footer/Footer';


function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        // aquí va todo el contenido de la aplicación
        
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutUsRoute />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
