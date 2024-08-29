import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import './assets/styles.css'

import nike from './assets/img/nike.jpg'
import adidas from './assets/img/adidas.jpg'
import asics from './assets/img/asics.jpg'
import newBalance from './assets/img/newBalance.jpg'
import hoka from './assets/img/hoka.png'

import facebook from './assets/img/facebook.png'
import instagram from './assets/img/instagram.png'
import whatsapp from './assets/img/whatsapp.webp'

import jackRabbitRun from '../../assets/logo/logo.png'
import { Whatsapp, CallCalling, MessageQuestion } from 'iconsax-react'


const MotionConstraints = styled(motion.div)`
    overflow-x: hidden;
  `;

const MotionBox = styled(motion.div)`
    width: 400vw;
  `

const marcas = [
  {
    id: 1,
    img: nike
  },
  {
    id: 2,
    img: adidas
  },
  {
    id: 3,
    img: hoka
  },
  {
    id: 4,
    img: asics
  },
  {
    id: 5,
    img: newBalance
  }
]

const redes = [
  {
    id: 1,
    red: facebook
  },
  {
    id: 3,
    red: instagram
  },
  {
    id: 3,
    red: whatsapp
  }
]

const Footer = () => {
  const constraintsRef = useRef(null)
  return (
    <div className='contain-footer'>
      <div className='layout-footer'>
        <div className='marcas'>
          <div className='principal-mar'>
            <img src={jackRabbitRun} alt="" />
          </div>
          <div className='all-marcas'>
            <MotionConstraints className='slider_container' ref={constraintsRef}>
              <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}  >
                {
                  marcas.map((item) => {
                    return (
                      <motion.div className='div_homeTurism' key={item.id}>
                        <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                          <ul >
                            <li className='list-carrousel-verticales'>
                              <img src={item.img} alt="" />
                            </li>
                          </ul>
                        </Grid>
                      </motion.div>
                    )
                  })
                }

              </MotionBox>
            </MotionConstraints>
          </div>
        </div>
        <div className='soporte'>
          <h3>Soporte</h3>
          <div>
            <ul>
              <li>
                <a href="https://wa.link/ozg120">
                  <Whatsapp size="32" color="#ffff" /> Escribenos
                </a>
              </li>
              <li><CallCalling size="32" color="#ffff" /><a href="tel:3174623685" >Llamanos</a></li>
              <li><MessageQuestion size="32" color="#ffff" />Preguntas Frecuentes</li>
            </ul>
          </div>
        </div>
        <div className='redes'>
          <h3>Redes</h3>
          <div className='layout-redes'>
            <div className="red">
              <a href="https://www.facebook.com/profile.php?id=100092566165741&mibextid=ZbWKwL" target='blank'>
                <img src={facebook} alt="" />
              </a>

            </div>
            <div className="red">
              <a href="https://instagram.com/jack_run09?igshid=MzNlNGNkZWQ4Mg==" target='blank'>
                <img src={instagram} alt="" />
              </a>

            </div>
            <div className="red">
              <a href="https://wa.link/ozg120" target='blank'>
                <img src={whatsapp} alt="" />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className='letters-credit'>
        © 2023 JackRabbitRun. Todos los derechos reservados
      </div>
    </div>
  )
}

export default Footer