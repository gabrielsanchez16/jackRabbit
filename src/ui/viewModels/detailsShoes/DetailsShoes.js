import React, { useState } from 'react'

import emailjs from '@emailjs/browser'




const DetailShoes = () => {

const [nombre, setNombre] = useState('')
const [asunto, setAsunto] = useState('')
const [telefono, setTelefono] = useState('')
const [descripcion, setDescripcion] = useState('')
const [error, setError] = useState(false)
const [enviado, setEnviado] = useState(false)


    const handleSubmit = (e) => {

        e.preventDefault()

        if (!nombre || !asunto || !telefono || !descripcion) {
            setError(true)
            return false;
        } else {
            setError(false)
            emailjs.sendForm('service_y22s2ar', 'template_66frcmb', e.target, 'NIrtyIx-h76vAmDMx')
                .then((result) => {
                    console.log(result.text);
                    setEnviado(true)
                    setAsunto('')
                    setDescripcion('')
                    setNombre('')
                    setTelefono('')
                    setTimeout(() => {
                        setEnviado(false)
                    }, 6000);
                }, (error) => {
                    console.log(error.text);
                });
        }

    }


  return {
    handleSubmit,
    error,
    enviado,
    setNombre,
    setAsunto,
    setTelefono,
    setDescripcion
  }
}

export default DetailShoes