import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import './assets/styles.css'
import Header from '../Header/Header'
import Api from '../../viewModels/CardTennis/Api'
import CardTennis from '../CardTennis/CardTennis'
import ApiSocks from '../../viewModels/Socks/ApiSocks'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const [background, setBackground] = useState('')
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { AllTennis, allAdidas, allNike, allAsics, allHoka, allNewBalance, allOnCloud } = Api()
  const { antiD, homePoster } = ApiSocks()

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


  const navigatePage = (route) => {
    navigate(route)
  }

  return (
    <div >
      <Header></Header>
      <main className='content-home magicpattern'>
        <section className='section-adidas'>
          <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>Tenis <span style={{ cursor: 'pointer', textDecoration: "underline" }} onClick={() => { navigatePage('/shoes') }}>Ver todo</span></h2>
          <div className='contenedor-cards'>
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
        {/* <section className='section-adidas'>
          <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>Medias <span style={{ cursor: 'pointer',textDecoration:"underline" }} onClick={() => { navigatePage('/socks') }}>Ver todo</span></h2>
          <div className='contenedor-cards'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  homePoster.map((item,key) => {
                    return (
                      <motion.div className='div_homeTurism' key={key}>
                        <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                          <div className="container" style={{cursor:'pointer'}}>
                            <div className="wrapper">
                              <div style={{ 'backgroundImage': `url(${item.img})`}} className="banner-image"> </div>
                              <h1>{item.title}</h1>
                              <p></p>
                            </div>
                          </div>
                        </Grid>
                      </motion.div>
                    )
                  })
                }
              </MotionBox>
            </MotionConstraints>
          </div>

        </section> */}

      </main>
      <div className='section-adidas'>
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/gF0rrpMH-Jo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

        </iframe>

      </div>

    </div>
  )
}

export default Home