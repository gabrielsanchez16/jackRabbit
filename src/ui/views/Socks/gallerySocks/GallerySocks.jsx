import React, { useState, lazy, Suspense, useEffect } from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { CircularProgress } from '@mui/material';
const CardGallery = lazy(()=>import('./CardGallery/CardGallery'))



const GallerySocks = () => {

    const { state, pathname } = useLocation()
    const [modalGallery, setModalGallery] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(0)

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [pathname])


    return (
        <div className='section-gallery' >
            <h2>Galeria</h2>
            <p>Haz click en la imagen para que la veas de cerca</p>
            <div className="gallery">
                {
                    state.data.map((item, key) => {
                        return (
                            <Suspense fallback={
                                <div className='img-loader'>
                                    <CircularProgress size={25}/>
                                </div>
                            
                            
                            }>
                                <CardGallery img={item.img} id={key} key={key} setModalGallery={setModalGallery} setSelectedPhoto={setSelectedPhoto} />
                            </Suspense>
                            
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