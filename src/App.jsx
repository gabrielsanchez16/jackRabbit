import { Routes, Route } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute/HomeRoute'
import AboutUsRoute from './Routes/AboutUsRoute/AboutUsRoute'
import NavBar from './ui/views/Navbar/NavBar';
import Footer from '././ui/views/Footer/Footer';
import { ResultSearchProvider } from './Context/ResultSearch/ResultSearchProvider';
import DetailShoesRoute from './Routes/DetailShoesRoute/DetailShoesRoute';

function App() {


  return (
    <ResultSearchProvider>
      <div className="App">
        <NavBar></NavBar> 
        <Routes>
        // aquí va todo el contenido de la aplicación

          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutUsRoute />} />
          <Route path="/shoes/:id" element={<DetailShoesRoute />} />

        </Routes>
        <Footer></Footer>
      </div>
    </ResultSearchProvider>

  )
}

export default App
