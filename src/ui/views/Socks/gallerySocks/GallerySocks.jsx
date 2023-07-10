import React, { useState } from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const GallerySocks = () => {

    const { state } = useLocation()
    const [modalGallery, setModalGallery] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(0)

    return (
        <div className='section-gallery' >
            <h2>Galeria</h2>
            <div className="gallery">
                {
                    state.data.map((item, key) => {
                        return (
                            <div onClick={()=>{
                                setSelectedPhoto(key)
                                setModalGallery(true)
                                
                                }} className="img-gallery" key={key}>
                                <img src={item.img} alt="socks" />
                            </div>
                        )
                    })
                }

            </div>
            {
                modalGallery &&
                <div className='modal-gallery'>
                    <div className='modal-content-gallery'>
                        <span onClick={() => { setModalGallery(false) }}>x</span>
                        <Slide duration={20000} transitionDuration={1500}>
                           
                                    <div className="each-slide-effect">
                                        <div style={{ 'backgroundImage': `url(${state.data[selectedPhoto].img})` }}></div>
                                    </div>
                            
                        </Slide>
                    </div>
                </div>
            }
        </div>
    )
}

export default GallerySocks