import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import './assets/styles.css'
import Header from '../Header/Header'
import Api from '../../viewModels/CardTennis/Api'
import CardTennis from '../CardTennis/CardTennis'
import { useLocation } from 'react-router-dom'

const Home = () => {

  const { pathname } = useLocation()

  const { AllTennis, allAdidas, allNike, allAsics, allHoka, allNewBalance, allOnCloud } = Api()

  const MotionConstraints = styled(motion.div)`
    overflow-x: hidden;
  `;

  const MotionBox = styled(motion.div)`
    width: 400vw;
  `

  const constraintsRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header></Header>

      <main className='content-home magicpattern'>
        <section className='section-adidas'>
          <h2>Adidas</h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allAdidas.map((item) => {
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
        <section className='section-adidas'>
          <h2>Nike</h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allNike.map((item) => {
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
        <section className='section-adidas'>
          <h2>Asics</h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allAsics.map((item) => {
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
        <section className='section-adidas'>
          <h2>Hoka</h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allHoka.map((item) => {
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
        <section className='section-adidas'>
          <h2>New Balance</h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allNewBalance.map((item) => {
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
        <section className='section-adidas'>
          <h2>OnCloud</h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  allOnCloud.map((item) => {
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
      </main>
    </div>
  )
}

export default Home