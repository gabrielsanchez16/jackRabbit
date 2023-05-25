import React, { useContext } from 'react'
import './assets/styles.css'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import ResultSearchContext from '../../../Context/ResultSearch/ResultSearchProvider'
import useNavBar from '../../viewModels/NavBar/NavBar'

const NavBar = () => {

    const {
        resultados
    } = useContext(ResultSearchContext)
    const toggleMenu = () => document.body.classList.toggle("open");


    const { SearchShoes, detailShoe, keyWord, setKeyWord } = useNavBar()

    return (
        <div className='contain-navbar'>
            <button onClick={toggleMenu} className="burger ">
                <span></span><span></span><span></span>
            </button>
            <nav className="navbar">
                <div className="logo">
                    <Link to={'/'}><img src={logo} /></Link>
                </div>
                <div className="search">

                    <input
                        spellCheck="false"
                        type="text"
                        className="search"
                        id="search"
                        placeholder='Buscar'
                        value={keyWord}
                        onChange={e => { SearchShoes(e.target.value), setKeyWord(e.target.value) }}
                    />
                    {
                        keyWord !== '' ?
                            (
                                resultados.length === 0 ?

                                    <div className='result-search'>


                                        <div className='content-result' >
                                            <p>No se Encontraron Resultados</p>
                                        </div>

                                    </div>
                                    :

                                    <div className='result-search'>

                                        {resultados.map(item => {
                                            return (
                                                <div className='content-result' key={item.id} onClick={() => {
                                                    detailShoe(item)
                                                    toggleMenu()
                                                }
                                                }>
                                                    <div className="content-result-info">
                                                        <h3>{item.brand}</h3><p> {item.model}</p>
                                                    </div>
                                                    <div className='content-result-img'>
                                                        <img src={item.img} alt={item.model} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                            )

                            :

                            ''


                    }
                </div>
                <nav>
                    <button className="v" onClick={toggleMenu}><Link to={'/about'}>Sobre Nosotros</Link></button>
                    <button className="v" onClick={toggleMenu}>Contactanos</button>
                </nav>
            </nav >
        </div >

    )
}

export default NavBar