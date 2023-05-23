import React, { useState,useContext } from 'react'
import ResultSearchContext from '../../../Context/ResultSearch/ResultSearchProvider'
import Api from '../CardTennis/Api'
import {  useNavigate,useLocation } from 'react-router-dom';

const NavBar = () => {


const {pathname} =  useLocation()
const {changeValue} = useContext(ResultSearchContext)
const navigate = useNavigate();

console.log(pathname)

const [keyWord, setKeyWord] = useState('')


const{AllTennis}=Api()

const SearchShoes = (shoes)=>{
    if(shoes === ''){
        changeValue([0])
    }else{
        const lowercaseSearch = shoes.toLowerCase();
    changeValue(AllTennis.filter(item => {
        const lowercaseModel = item.model.toLowerCase();
        return lowercaseModel.includes(lowercaseSearch);
    }));
    }
}

const detailShoe = (info)=>{
  setKeyWord('')
    navigate(`/shoes/${info.model}`,{state:{
      brand:info.brand,
      model:info.model,
      img:info.img,
      price:info.price,
      color:info.color
    }})
}

  return {
    SearchShoes,
    detailShoe,
    keyWord,
    setKeyWord
  }
}

export default NavBar