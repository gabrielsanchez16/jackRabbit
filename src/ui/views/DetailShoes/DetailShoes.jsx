import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom';
import './styles.css'
import Api from '../../viewModels/CardTennis/Api';
import CardTennis from '../CardTennis/CardTennis';


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
              <h2>{state.brand} {state.model}</h2>

              <div className='contain-btn-buy'>
                <button style={{backgroundColor:`${state.color}`}}>Comprar</button>
              </div>
          </div>
          <aside className='aside-form-layout'>
              <h3>form</h3>
          </aside>
        </div>
        <div>

          <h2 style={{marginTop:"2rem"}}>Recomendaciones</h2>
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