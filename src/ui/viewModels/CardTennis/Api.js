import adistarGreen from '../../assets/img/adistar-green.jpeg'
import adistarOrange from '../../assets/img/adistar-orange.jpeg'
import adistarPink from '../../assets/img/adistar-pink.jpeg'
import bostonRed from '../../assets/img/boston10-red.jpeg'
import bostonBlack from '../../assets/img/boston10-black.jpeg'
import bostonPink from '../../assets/img/boston10-pink.jpeg'
import bostonBlue from '../../assets/img/boston10-blue.jpeg'
import flyknitBlack from '../../assets/img/flyknit-black.jpeg'
import flyknitOrange from '../../assets/img/flyknit-orange.jpeg'
import flyknitGreen from '../../assets/img/flyknit-green.jpeg'
import vaporflyPink from '../../assets/img/vaporfly-pink.jpeg'
import vaporflyYellow from '../../assets/img/vaporfly-tigger.jpeg'
import trailBlack from '../../assets/img/nike-trail-black.jpeg'
import trailBlue from '../../assets/img/nike-trail-blue.jpeg'
import pegasusPink from '../../assets/img/pegasus-pink.jpeg'
import pegasusBlack from '../../assets/img/pegasus-black.jpeg'
import adidasProBlack from '../../assets/img/adios-pro-black.jpeg'
import adidasProWhite from '../../assets/img/adios-pro-white.jpeg'
import invincibleBlack from '../../assets/img/invincibleBlack.jpeg'
import invincibleBlue from '../../assets/img/invincibleBlue.jpeg'
import invincibleWhite from '../../assets/img/invincibleWhite.jpeg'


const Api = () => {

    const AllTennis = [
        {
            id:1,
            brand:'Adidas',
            model:'Adistar Green', 
            price:180000,
            color:'#C4FD32',
            img: adistarGreen
        },
        {
            id:2,
            brand:'Adidas',
            model:'Adistar Orange', 
            price:180000,
            color:'#FB5205',
            img: adistarOrange
        },
        {
            id:3,
            brand:'Adidas',
            model:'Adistar Pink', 
            price:180000,
            color:'#FB7CB4',
            img: adistarPink
        },
        {
            id:4,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#000000',
            img: bostonBlack
        },
        {
            id:5,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#340807',
            img: bostonRed
        },
        {
            id:6,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#40B6C3',
            img: bostonBlue
        },
        {
            id:5,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#DA9FA1',
            img: bostonPink
        },
        {
            id:6,
            brand:'Nike',
            model:'Flyknit', 
            price:185000,
            color:'#000000',
            img: flyknitBlack
        },
        {
            id:7,
            brand:'Nike',
            model:'Flyknit', 
            price:185000,
            color:'#E9842B',
            img: flyknitOrange
        },
        {
            id:8,
            brand:'Nike',
            model:'Flyknit', 
            price:185000,
            color:'#A8C782',
            img: flyknitGreen
        },
        {
            id:9,
            brand:'Nike',
            model:'Vaporfly', 
            price:190000,
            color:'#B85C81',
            img: vaporflyPink
        },
        {
            id:10,
            brand:'Nike',
            model:'vaporfly', 
            price:190000,
            color:'#F3C004',
            img: vaporflyYellow
        },
        {
            id:11,
            brand:'Nike',
            model:'Trail', 
            price:175000,
            color:'#000000',
            img: trailBlack
        },
        {
            id:11,
            brand:'Nike',
            model:'Trail', 
            price:175000,
            color:'#455D83',
            img: trailBlue
        },
        {
            id:12,
            brand:'Nike',
            model:'Pegasus', 
            price:175000,
            color:'#E9D3D6',
            img: pegasusPink
        },
        {
            id:13,
            brand:'Nike',
            model:'Pegasus', 
            price:175000,
            color:'#000000',
            img: pegasusBlack
        },
        {
            id:14,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#000000',
            img: invincibleBlack
        },
        {
            id:15,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#6EB0D4',
            img: invincibleBlue
        },
        
        {
            id:16,
            brand:'Adidas',
            model:'Adios Pro', 
            price:200000,
            color:'#000000',
            img: adidasProBlack
        },
        {
            id:17,
            brand:'Adidas',
            model:'Adios Pro', 
            price:200000,
            color:'#A6A799',
            img: adidasProWhite
        },
        {
            id:18,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#6EB0D4',
            img: invincibleWhite
        },

    ]

    const allAdidas = AllTennis.filter(item=>{
        return item.brand === 'Adidas'
    })

    const allNike = AllTennis.filter(item=>{
        return item.brand === 'Nike'
    })

  return {
    AllTennis,
    allAdidas,
    allNike
  }
}

export default Api