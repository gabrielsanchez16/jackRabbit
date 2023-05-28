import React, { useRef, useState,useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom';
import './styles.css'
import Api from '../../viewModels/CardTennis/Api';
import CardTennis from '../CardTennis/CardTennis';
import { ArrowDown2 } from 'iconsax-react';
import DetailsShoes from '../../viewModels/detailsShoes/DetailsShoes';
import UCardTennis from '../../viewModels/CardTennis/CardTennis';

const DetailShoes = () => {

  const { AllTennis } = Api()
  const { state, pathname} = useLocation()
  const {
    enviado,
    error,
    handleSubmit,
    setNombre,
    setAsunto,
    setTelefono,
    setDescripcion } = DetailsShoes()

  const {formatoPesos} = UCardTennis()

  const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

  const MotionBox = styled(motion.div)`
  width: 400vw;
`

  const constraintsRef = useRef(null)

  const [dropdownDescription, setDropdownDescription] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

  return (
    <div className='contain-detail-shoes'>
      <section className='card-view-shoe'>
        <div className='route-detail-shoes'>
          <h4>
            Home {'>'} Shoes {'>'} {state.model}
          </h4>
          <div className='circle-color' style={{ borderRadius: '50%', background: `${state.color}`, width: '18px', height: '18px', borderColor: "white", borderWidth: '2px', borderStyle: 'solid' }}></div>
        </div>
        <div className='layout-shoe-detail'>
          <div className='main-info-layout'>
            <div>
              <img src={state.img} alt="" />
            </div>
            <h2 className='title-tennis-detail'>{state.brand} {state.model}</h2>
            <h2 className='title-tennis-detail-price' style={{marginBottom:"1rem"}}> <span>Precio:</span> {formatoPesos(state.price) }</h2>
            <div>
              <p>Tallas: {state.size}</p>
              <p>Peso: {state.weight}</p>
            </div>
            <div className='dropdown-button-detail' onClick={() => setDropdownDescription(!dropdownDescription)}>
              <div className='contain-button-detail'>
                <h4>Descripcion</h4>
                <span>
                  <ArrowDown2
                    size="32"
                    color="#ffffff"
                  />
                </span>
              </div>
              {
                dropdownDescription &&
                <div className='contain-info-description'>
                  <p>{state.description}</p>
                </div>
              }

            </div>

            <div className='contain-btn-buy' >
              <a href="https://wa.link/ozg120" target='blank'>
                <button style={{ backgroundColor: `${state.color}` }}>Comprar</button>
              </a>

            </div>
          </div>
          <aside className='aside-form-layout'>
            <form onSubmit={handleSubmit} className='form-contact'>
              <input type="hidden" name="contact" value="contact" />
              <legend>Comunicate</legend>
              <div className='campo'>
                <label htmlFor="">Nombre</label>
                <input type="text" name='nombre' onChange={(e) => setNombre(e.target.value)} id='nombre' placeholder='Tu Nombre' />
              </div>
              <div className='campo'>
                <label htmlFor="">Asunto</label>
                <input type="text" name='asunto' onChange={(e) => setAsunto(e.target.value)} id='asunto' placeholder='Motivo del contacto' />
              </div>
              <div className='campo'>
                <label htmlFor="">Telefono</label>
                <input type="text" name='telefono' onChange={(e) => setTelefono(e.target.value)} id='telefono' placeholder='Tu Telefono' />
              </div>
              <div className='campo'>
                <label htmlFor="">Descripcion</label>
                <textarea name="descripcion" onChange={(e) => setDescripcion(e.target.value)} id="descripcion" cols="30" rows="10"></textarea>
              </div>
              {
                error &&
                <div className='error-send-message'>
                  <p>Rellena todos los campos</p>
                </div>
              }
              {
                enviado &&
                <>
                  <div className='succes-email'>
                    <p>Se ha enviado correctamente</p>
                  </div>
                  <div>
                    <p className='text-agradecimiento'>
                      En unas horas nos pondremos en contacto contigo gracias por preferirnos
                    </p>
                  </div>
                </>

              }

              <input className='send-form' type='submit' value={"enviar"} />
            </form>
          </aside>
        </div>
        <div className='contain-recommend'>

          <h2 style={{ marginTop: "2rem", fontFamily: 'Sedgwick Ave Display, cursive' }}>Recomendaciones</h2>
          <MotionConstraints className='slider_container' ref={constraintsRef}>
            <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
              {
                AllTennis.map((item) => {
                  return (
                    <motion.div className='div_homeTurism' key={item.id}>
                      <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                        <CardTennis item={item} />
                      </Grid>
                    </motion.div>
                  )
                })
              }
            </MotionBox>
          </MotionConstraints>
        </div>
      </section>
    </div>
  )
}

export default DetailShoes