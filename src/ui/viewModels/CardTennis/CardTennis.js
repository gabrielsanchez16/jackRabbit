import React from 'react'

const CardTennis = () => {
  function formatoPesos(valor) {
    return "$" + valor.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return {
    formatoPesos
  }
}

export default CardTennis