import React, { useEffect } from 'react'
import videoOffer from '../../assets/video/offer.mp4'
import ApiSocks from '../../viewModels/Socks/ApiSocks'
import './styles.css'
import { useNavigate,useLocation } from 'react-router-dom'

const Socks = () => {

const {pathname} = useLocation()

  const {
    antiD,
    bucaneras,
    canillerasM
  } = ApiSocks()

  const navigate = useNavigate()
  const navigateGallery = (dataS)=>{
    navigate('/socks/gallery',{
      state:{
        data:dataS
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <div className='section-adidas contain-video' >
        <video src={videoOffer} autoPlay loop>

        </video>
      </div>
      <div className='section-categories-socks'>

        <div className="container">
          <div  className="wrapper">
            <div  className="banner-image"> </div>
            <h1>Anti Deslizantes</h1>
            <p></p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline" onClick={()=>{navigateGallery(antiD)}}>Ver Diseños</button>
            <button className="btn fill">Comprar</button>
          </div>
        </div>
        <div className="container">
          <div  className="wrapper">
            <div style={{ 'backgroundImage': `url(${bucaneras[2].img})`}} className="banner-image"> </div>
            <h1>Bucaneras</h1>
            <p></p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline" onClick={()=>{navigateGallery(bucaneras)}}>Ver Diseños</button>
            <button className="btn fill">Comprar</button>
          </div>
        </div>
        <div className="container">
          <div  className="wrapper">
            <div style={{ 'backgroundImage': `url(${canillerasM[30].img})`}} className="banner-image"> </div>
            <h1>Canilleras Marca</h1>
            <p></p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline" onClick={()=>{navigateGallery(canillerasM)}}>Ver Diseños</button>
            <button className="btn fill">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Socks