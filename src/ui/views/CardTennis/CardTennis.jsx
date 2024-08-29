import React from 'react'
import './styles.css'
import useCardTennis from '../../viewModels/CardTennis/CardTennis'
import NavBar from '../../viewModels/NavBar/NavBar'

const CardTennis = ({ item }) => {
  const { formatoPesos } = useCardTennis()
  const {detailShoe} = NavBar()

  return (
    <div className='contain-card-tennis' onClick={()=>{detailShoe(item)}}>
      <div className='img-div'>
        <img src={item.img} alt={item.model} />
      </div>
      <div className='div-description'>
        <h3>{item.model}</h3>
        <div>
          <p>Marca: {item.brand}</p>
          <div style={{ display: "flex", alignItems: 'center', gap: "3px" }}>
            <p className='p-color'>color: </p>
            <div style={{ borderRadius: '50%', width: '18px', height: '18px', background: `${item.color}`, borderColor: "white", borderWidth: '2px', borderStyle: 'solid' }}></div>
          </div>
          <p>Precio: {formatoPesos(item.price)}</p>
        </div>

      </div>
      <div className='contain-buttom-buy'>
        
          <button onClick={()=>{detailShoe(item)}}>
            Ver Detalle
          </button>
      

      </div>

    </div>
  )
}

export default CardTennis