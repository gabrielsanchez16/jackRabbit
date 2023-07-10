import React from 'react'

const CardGallery = ({setSelectedPhoto, id, setModalGallery, img}) => {
  return (
    <div onClick={()=>{
        setSelectedPhoto(id)
        setModalGallery(true)
        
        }} className="img-gallery" >
        <img src={img} loading='lazy' alt="socks" />
    </div>
  )
}

export default CardGallery