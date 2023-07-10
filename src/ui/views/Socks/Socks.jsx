import React from 'react'
import videoOffer from '../../assets/video/offer.mp4'
import ApiSocks from '../../viewModels/Socks/ApiSocks'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Socks = () => {

  const {
    antiD,
    bucaneras
  } = ApiSocks()

  const navigate = useNavigate()
  const navigateGallery = (dataS)=>{
    navigate('/socks/gallery',{
      state:{
        data:dataS
      }
    })
  }

  return (
    <div>
      <div className='section-adidas contain-video' >
        <video src={videoOffer} autoPlay loop>

        </video>
      </div>
      <div className='section-adidas'>

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
      </div>
    </div>
  
  )
}

export default Socks