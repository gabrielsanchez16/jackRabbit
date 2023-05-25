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
import zoomFly5Orange from '../../assets/img/zoom-fly5.jpeg'

const Api = () => {

    const AllTennis = [
        {
            id:1,
            brand:'Adidas',
            model:'Adistar Green', 
            price:180000,
            color:'#C4FD32',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarGreen
        },
        {
            id:2,
            brand:'Adidas',
            model:'Adistar Orange', 
            price:180000,
            color:'#FB5205',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarOrange
        },
        {
            id:3,
            brand:'Adidas',
            model:'Adistar Pink', 
            price:180000,
            color:'#FB7CB4',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarPink,
        },
        {
            id:4,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#000000',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonBlack
        },
        {
            id:5,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#340807',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonRed
        },
        {
            id:6,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#40B6C3',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonBlue
        },
        {
            id:7,
            brand:'Adidas',
            model:'Boston 10', 
            price:185000,
            color:'#DA9FA1',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonPink
        },
        {
            id:8,
            brand:'Nike',
            model:'Zoom Fly 4', 
            price:185000,
            color:'#000000',
            weight:'290gr',
            description:'Esta cuarta edición de las Nike Zoom Fly presenta como principal novedad el rediseño total de su corte superior. Los desarrolladores de producto de la marca de Oregón han apostado por sustituir el tejido VaporWeave transparente por una malla técnica de ingeniería con tejido Flyknit. Este cambio en la parte superior supone una sensación de mayor suave y confort, pero también de máxima transpirabilidad. Además, como valor añadido, este recurso de la tecnología Flyknit implementa todo ese entramado de fibras más ligeras y resistentes, y que se hacen notar en estas Nike Zoom Fly 4 con una mayor grado de soporte en la zona del mediopié',
            img: flyknitBlack
        },
        {
            id:9,
            brand:'Nike',
            model:'Zoom Fly 4', 
            price:185000,
            color:'#E9842B',
            weight:'290gr',
            description:'esta cuarta edición de las Nike Zoom Fly presenta como principal novedad el rediseño total de su corte superior. Los desarrolladores de producto de la marca de Oregón han apostado por sustituir el tejido VaporWeave transparente por una malla técnica de ingeniería con tejido Flyknit. Este cambio en la parte superior supone una sensación de mayor suave y confort, pero también de máxima transpirabilidad. Además, como valor añadido, este recurso de la tecnología Flyknit implementa todo ese entramado de fibras más ligeras y resistentes, y que se hacen notar en estas Nike Zoom Fly 4 con una mayor grado de soporte en la zona del mediopié',
            img: flyknitOrange
        },
        {
            id:10,
            brand:'Nike',
            model:'Zoom Fly 4', 
            price:185000,
            color:'#A8C782',
            weight:'290gr',
            description:'esta cuarta edición de las Nike Zoom Fly presenta como principal novedad el rediseño total de su corte superior. Los desarrolladores de producto de la marca de Oregón han apostado por sustituir el tejido VaporWeave transparente por una malla técnica de ingeniería con tejido Flyknit. Este cambio en la parte superior supone una sensación de mayor suave y confort, pero también de máxima transpirabilidad. Además, como valor añadido, este recurso de la tecnología Flyknit implementa todo ese entramado de fibras más ligeras y resistentes, y que se hacen notar en estas Nike Zoom Fly 4 con una mayor grado de soporte en la zona del mediopié',
            img: flyknitGreen
        },
        {
            id:11,
            brand:'Nike',
            model:'Vaporfly', 
            price:190000,
            color:'#B85C81',
            weight:'250gr',
            description:'Las Nike Vaporfly se erigen como uno de los lanzamientos más destacados de Nike Running para el 2021. Un modelo que ha hecho historia posicionándose como una de las opciones más rápidas de la firma norteamericana y cuya segunda actualización promete seguir cosechando innumerables éxitos. Puestas en escena con la figura del gran Eliud Kipchoge calzándose su versión original, estas actualizadas Vaporfly se renuevan para seguir presentándose como es opción fiable como zapatilla de competición para seguir superando objetivos y batiendo récords.',
            img: vaporflyPink
        },
        {
            id:12,
            brand:'Nike',
            model:'vaporfly', 
            price:190000,
            color:'#F3C004',
            weight:'250gr',
            description:'Las Nike Vaporfly se erigen como uno de los lanzamientos más destacados de Nike Running para el 2021. Un modelo que ha hecho historia posicionándose como una de las opciones más rápidas de la firma norteamericana y cuya segunda actualización promete seguir cosechando innumerables éxitos. Puestas en escena con la figura del gran Eliud Kipchoge calzándose su versión original, estas actualizadas Vaporfly se renuevan para seguir presentándose como es opción fiable como zapatilla de competición para seguir superando objetivos y batiendo récords.',
            img: vaporflyYellow
        },
        {
            id:13,
            brand:'Nike',
            model:'Trail', 
            price:175000,
            color:'#000000',
            weight:'330gr',
            description:'No hay descripcion disponible',
            img: trailBlack
        },
        {
            id:14,
            brand:'Nike',
            model:'Trail', 
            price:175000,
            color:'#455D83',
            weight:'330gr',
            description:'No hay descripcion disponible',
            img: trailBlue
        },
        {
            id:15,
            brand:'Nike',
            model:'Pegasus 38', 
            price:175000,
            color:'#E9D3D6',
            weight:'290gr',
            description:'Una zapatilla de entrenamiento para tiradas largas que te permite correr más rápido y mejorar tus tiempos. Los diseñadores de producto apostarán por repetir la implementación de la innovadora y exitosa espuma React, de longitud completa, que asegura una óptima amortiguación, pero también una respuesta más reactiva para disfrutar de transiciones más suaves en carrera. Asimismo, esa unidad Zoom Air en el antepié es capaz de aportar un mejor retorno de energía y más sensible, como ya sucedía en las Nike Pegasus 37',
            img: pegasusPink
        },
        {
            id:16,
            brand:'Nike',
            model:'Pegasus 38', 
            price:175000,
            color:'#000000',
            weight:'290gr',
            description:'Una zapatilla de entrenamiento para tiradas largas que te permite correr más rápido y mejorar tus tiempos. Los diseñadores de producto apostarán por repetir la implementación de la innovadora y exitosa espuma React, de longitud completa, que asegura una óptima amortiguación, pero también una respuesta más reactiva para disfrutar de transiciones más suaves en carrera. Asimismo, esa unidad Zoom Air en el antepié es capaz de aportar un mejor retorno de energía y más sensible, como ya sucedía en las Nike Pegasus 37',
            img: pegasusBlack
        },
        {
            id:17,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#000000',
            weight:'310gr',
            description:'Las Nike ZoomX Invincible Run Flyknit 3 son unas zapatillas de running que presenta grandes novedades y que no son pocas, ya que la zapatilla cambia por completo, tanto el diseño del upper, como la suela y la forma de la mediasuela. Lo que no se modifica, y con buen criterio, es la espuma ZoomX, garante de un tacto extremadamente suave y de un rebote excepcional. Las Nike ZoomX Invincible Run Flyknit 3 llegan con un upper totalmente renovado, luciendo un mesh mucho más fino, transpirable y minimalista. Modificaciones que también se observan en la zona de la lengüeta y el collar del tobillo, ahora mucho más finos y, más ligeros.',
            img: invincibleBlack
        },
        {
            id:18,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#6EB0D4',
            weight:'310gr',
            description:'Las Nike ZoomX Invincible Run Flyknit 3 son unas zapatillas de running que presenta grandes novedades y que no son pocas, ya que la zapatilla cambia por completo, tanto el diseño del upper, como la suela y la forma de la mediasuela. Lo que no se modifica, y con buen criterio, es la espuma ZoomX, garante de un tacto extremadamente suave y de un rebote excepcional. Las Nike ZoomX Invincible Run Flyknit 3 llegan con un upper totalmente renovado, luciendo un mesh mucho más fino, transpirable y minimalista. Modificaciones que también se observan en la zona de la lengüeta y el collar del tobillo, ahora mucho más finos y, más ligeros.',
            img: invincibleBlue
        },
        
        {
            id:19,
            brand:'Adidas',
            model:'Adios Pro', 
            price:200000,
            color:'#000000',
            weight:'250gr',
            description:'Adizero Adios Pro 2.0, la última versión de la zapatilla “rompe-récords” por excelencia de la firma alemana. Una silueta que además, lidera la nueva actualización de la línea más rápida de adidas Running, la familia Adizero, diseñada para alcanzar la máxima velocidad tanto en asfalto como en pista. Una silueta, ahora más ligera, que incorpora lo último en tecnología y que ha sido diseñada en colaboración con algunos de los atletas de élite más rápidos del planeta. A continuación desgranamos, uno a uno, los detalles que acompañan a las nuevas adidas Adizero Adios Pro 2, la zapatilla más rápida de la historia de la firma de las tres bandas. ',
            img: adidasProBlack
        },
        {
            id:20,
            brand:'Adidas',
            model:'Adios Pro', 
            price:200000,
            color:'#A6A799',
            weight:'250gr',
            description:'Adizero Adios Pro 2.0, la última versión de la zapatilla “rompe-récords” por excelencia de la firma alemana. Una silueta que además, lidera la nueva actualización de la línea más rápida de adidas Running, la familia Adizero, diseñada para alcanzar la máxima velocidad tanto en asfalto como en pista. Una silueta, ahora más ligera, que incorpora lo último en tecnología y que ha sido diseñada en colaboración con algunos de los atletas de élite más rápidos del planeta. A continuación desgranamos, uno a uno, los detalles que acompañan a las nuevas adidas Adizero Adios Pro 2, la zapatilla más rápida de la historia de la firma de las tres bandas. ',
            img: adidasProWhite
        },
        {
            id:21,
            brand:'Nike',
            model:'Invincible FK3', 
            price:220000,
            color:'#6EB0D4',
            weight:'310gr',
            description:'Las Nike ZoomX Invincible Run Flyknit 3 son unas zapatillas de running que presenta grandes novedades y que no son pocas, ya que la zapatilla cambia por completo, tanto el diseño del upper, como la suela y la forma de la mediasuela. Lo que no se modifica, y con buen criterio, es la espuma ZoomX, garante de un tacto extremadamente suave y de un rebote excepcional. Las Nike ZoomX Invincible Run Flyknit 3 llegan con un upper totalmente renovado, luciendo un mesh mucho más fino, transpirable y minimalista. Modificaciones que también se observan en la zona de la lengüeta y el collar del tobillo, ahora mucho más finos y, más ligeros.',
            img: invincibleWhite
        },
        {
            id:22,
            brand:'Nike',
            model:'Zoom fly 5', 
            price:190000,
            color:'#E5311A',
            weight:'290gr',
            description:'La espuma ZoomX recién incorporada en la entresuela lleva un calzado confiable y respetado a otro nivel de rendimiento que no estaba presente en el Zoom Fly 4. Esta adición logra un sistema de amortiguación más ligero y con mayor respuesta inmediata. Aprovecha al máximo todas estas características versátiles que te ayudarán a correr de manera más rápida y cómoda, y a disfrutar más de tus carreras. El antepié y el talón cuentan con bases un poco más anchas para ofrecer una plataforma estable que te permite enfrentar las curvas y las carreras largas con mayor confianza.',
            img: zoomFly5Orange
        }

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