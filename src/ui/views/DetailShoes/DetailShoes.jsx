import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom';
import './styles.css'
import Api from '../../viewModels/CardTennis/Api';
import CardTennis from '../CardTennis/CardTennis';
import { ArrowDown2 } from 'iconsax-react';


const DetailShoes = () => {

  const { AllTennis } = Api()
  const { state } = useLocation()

  const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

  const MotionBox = styled(motion.div)`
  width: 400vw;
`

  const constraintsRef = useRef(null)

  const [dropdownDescription, setDropdownDescription] = useState(false)

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
            <div>
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

            <div className='contain-btn-buy'>
              <a href="https://wa.link/ozg120" target='blank'>
                <button style={{ backgroundColor: `${state.color}` }}>Comprar</button>
              </a>

            </div>
          </div>
          <aside className='aside-form-layout'>
            <form name="contact" method="POST" netlify className='form-contact'>
              <legend>Comunicate</legend>
              <div className='campo'>
                <label htmlFor="">Nombre</label>
                <input type="text" name='nombre' placeholder='Tu Nombre' />
              </div>
              <div className='campo'>
                <label htmlFor="">Asunto</label>
                <input type="text" name='asunto' placeholder='Motivo del contacto' />
              </div>
              <div className='campo'>
                <label htmlFor="">Telefono</label>
                <input type="text" name='telefono' placeholder='Tu Telefono' />
              </div>
              <div className='campo'>
                <label htmlFor="">Descripcion</label>
                <textarea name="Descripcion" id="Description" cols="30" rows="10"></textarea>
              </div>
              <button>Enviar</button>
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