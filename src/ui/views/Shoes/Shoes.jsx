import React, { useRef, useEffect } from 'react'
import CardTennis from '../CardTennis/CardTennis'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material'
import './styles.css'

import Api from '../../viewModels/CardTennis/Api'

import videoOffer from '../../assets/video/offer.mp4'

const Shoes = () => {

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
        <div className=''>
            <div className='section-adidas contain-video'>

                <iframe width="100%" height="450px" src="https://www.youtube.com/embed/hzk0neQFIfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
            </div>
            <div className='section-adidas contain-video' >
                <video src={videoOffer} autoPlay loop>

                </video>
            </div>
            <section className='section-adidas'>
                <h2>Adidas</h2>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
        </div>
    )
}

export default Shoes