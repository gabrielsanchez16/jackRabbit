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
import hokaCarbonBlue from '../../assets/img/hoka-carbon-x3-blue.png'
import hokaCarbonGreen from '../../assets/img/hoka-carbon-x3-green.png'
import duramo from '../../assets/img/duramo-2.0.png'
import vaporflyBlack from '../../assets/img/vaporfly-black.png'
import ultraboostLight from '../../assets/img/ultrabostLight.png'
import newBalanceFullCell from '../../assets/img/newBalance-fullCel.png'
import asicsSimpleBlack from '../../assets/img/asics-simple-black.png'
import asicsSimpleGreen from '../../assets/img/asics-simple-green.png'
import asicsNovaBlastBlack from '../../assets/img/asics-novablast-black.png'
import magicSpeedGreen from '../../assets/img/asics-magic-speed-green.png'
import magicSpeedPurple from '../../assets/img/asics-magic-speed-purple.png'
import fuelCellPink from '../../assets/img/fuelCellPink.jpeg'
import fuelCellBlack from '../../assets/img/fuelCellBlack.png'
import CarbonXWhite from '../../assets/img/CarbonX-White.png'
import CarbonXBlack from '../../assets/img/CarbonX-Black.jpeg'
import OnCloudMonsterGrey from '../../assets/img/OnCloudMonster-gray.png'
import OnCloudMonsterWhite from '../../assets/img/OnCloudMonster-white.png'
import AsicsKinsei from '../../assets/img/AsicsGelNimbus24.jpeg'
import AsicsGelNimbus24 from '../../assets/img/AsicsKinsei.jpeg'
import InvincibleRun2 from '../../assets/img/InvincibleRun2.jpeg'
import goretexRed from '../../assets/img/goretexRed.png'
import ZoomFly4Pink from '../../assets/img/ZoomFly4Pink.png'

const Api = () => {

    const AllTennis = [
        {
            id:1,
            brand:'Adidas',
            model:'Adistar Green',
            size: 'eur40, eur41, eur42, eur43',
            price:185000,
            color:'#C4FD32',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarGreen
        },
        {
            id:2,
            brand:'Adidas',
            model:'Adistar Orange', 
            size: 'eur40, eur41, eur42, eur43',
            price:185000,
            color:'#FB5205',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarOrange
        },
        {
            id:3,
            brand:'Adidas',
            model:'Adistar Pink', 
            size: 'eur36, eur37, eur38, eur39',
            price:185000,
            color:'#FB7CB4',
            weight:'320gr',
            description:'Tenis para carreras de fondo inspirados en la idea del movimiento perpetuo y probados en más de 4,500 km. Adistar combina una plataforma de espuma REPETITOR suave y ligera con REPETITOR +, una espuma más firme, para crear una mediasuela de doble densidad. La mediasuela de EVA reciclada 15% más firme en el talón protege y ayuda a estabilizar cualquier impacto en el talón. La propulsión hacia el frente se ve mejorada por la geometría de balancín, así como por una caída general de 6mm del talón a la punta. Aterrizajes suaves e impulsos energizados con un calzado diseñado para llegar más lejos.',
            img: adistarPink,
        },
        {
            id:4,
            brand:'Adidas',
            model:'Boston 10', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#000000',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonBlack
        },
        {
            id:5,
            brand:'Adidas',
            model:'Boston 10', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#340807',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonRed
        },
        {
            id:6,
            brand:'Adidas',
            model:'Boston 10', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#40B6C3',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonBlue
        },
        {
            id:7,
            brand:'Adidas',
            model:'Boston 10', 
            size: 'eur36, eur37, eur38, eur39',
            price:195000,
            color:'#DA9FA1',
            weight:'335gr',
            description:'Por salud. Para tener más claridad mental. Para alcanzar tu próxima marca personal. No importa la razón por la que corres, los tenis Adizero Boston 10 te ayudan a lograr tu versión más rápida. Con más amortiguación que el calzado para maratones promedio, la mediasuela combina Lightstrike con Lightstrike Pro. El resultado es una pisada ultrarreceptiva que te brinda velocidad en tus carreras ',
            img: bostonPink
        },
        {
            id:8,
            brand:'Nike',
            model:'Zoom Fly 4', 
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur36, eur37, eur38, eur39',
            price:195900,
            color:'#B85C81',
            weight:'250gr',
            description:'Las Nike Vaporfly se erigen como uno de los lanzamientos más destacados de Nike Running para el 2021. Un modelo que ha hecho historia posicionándose como una de las opciones más rápidas de la firma norteamericana y cuya segunda actualización promete seguir cosechando innumerables éxitos. Puestas en escena con la figura del gran Eliud Kipchoge calzándose su versión original, estas actualizadas Vaporfly se renuevan para seguir presentándose como es opción fiable como zapatilla de competición para seguir superando objetivos y batiendo récords.',
            img: vaporflyPink
        },
        {
            id:12,
            brand:'Nike',
            model:'vaporfly', 
            size: 'eur40, eur41, eur42, eur43',
            price:195900,
            color:'#F3C004',
            weight:'250gr',
            description:'Las Nike Vaporfly se erigen como uno de los lanzamientos más destacados de Nike Running para el 2021. Un modelo que ha hecho historia posicionándose como una de las opciones más rápidas de la firma norteamericana y cuya segunda actualización promete seguir cosechando innumerables éxitos. Puestas en escena con la figura del gran Eliud Kipchoge calzándose su versión original, estas actualizadas Vaporfly se renuevan para seguir presentándose como es opción fiable como zapatilla de competición para seguir superando objetivos y batiendo récords.',
            img: vaporflyYellow
        },
        {
            id:13,
            brand:'Nike',
            model:'Trail', 
            size: 'eur40, eur41, eur42, eur43',
            price:185000,
            color:'#000000',
            weight:'330gr',
            description:'No hay descripcion disponible',
            img: trailBlack
        },
        {
            id:14,
            brand:'Nike',
            model:'Trail', 
            size: 'eur40, eur41, eur42, eur43',
            price:185000,
            color:'#455D83',
            weight:'330gr',
            description:'No hay descripcion disponible',
            img: trailBlue
        },
        {
            id:15,
            brand:'Nike',
            model:'Pegasus 38', 
            size: 'eur36, eur37, eur38, eur39',
            price:180000,
            color:'rgb(210, 164, 170)',
            weight:'290gr',
            description:'Una zapatilla de entrenamiento para tiradas largas que te permite correr más rápido y mejorar tus tiempos. Los diseñadores de producto apostarán por repetir la implementación de la innovadora y exitosa espuma React, de longitud completa, que asegura una óptima amortiguación, pero también una respuesta más reactiva para disfrutar de transiciones más suaves en carrera. Asimismo, esa unidad Zoom Air en el antepié es capaz de aportar un mejor retorno de energía y más sensible, como ya sucedía en las Nike Pegasus 37',
            img: pegasusPink
        },
        {
            id:16,
            brand:'Nike',
            model:'Pegasus 38', 
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur40, eur41, eur42, eur43',
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
            size: 'eur36, eur37, eur38, eur39',
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
            size: 'eur40, eur41, eur42, eur43',
            price:190000,
            color:'#E5311A',
            weight:'290gr',
            description:'La espuma ZoomX recién incorporada en la entresuela lleva un calzado confiable y respetado a otro nivel de rendimiento que no estaba presente en el Zoom Fly 4. Esta adición logra un sistema de amortiguación más ligero y con mayor respuesta inmediata. Aprovecha al máximo todas estas características versátiles que te ayudarán a correr de manera más rápida y cómoda, y a disfrutar más de tus carreras. El antepié y el talón cuentan con bases un poco más anchas para ofrecer una plataforma estable que te permite enfrentar las curvas y las carreras largas con mayor confianza.',
            img: zoomFly5Orange
        },
        {
            id:23,
            brand:'Hoka',
            model:'Carbon-X', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#0A8CC6',
            weight:'240gr',
            description:'Unas zapatillas de competición orientadas a ofrecer una estabilidad y protección superiores en carrera. La ligereza de este modelo contrasta con su capacidad amortiguadora que, al mismo tiempo, favorece una conducción más dinámica y natural del pie. Sin lugar a duda, un modelo de la firma americana que incluye una innovadora estructura, capaz de ofrecer una respuesta de calidad ¡independientemente de la distancia e intensidad del reto!',
            img: hokaCarbonBlue
        },
        {
            id:24,
            brand:'Hoka',
            model:'Carbon-X', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#D5DE4E',
            weight:'240gr',
            description:'Unas zapatillas de competición orientadas a ofrecer una estabilidad y protección superiores en carrera. La ligereza de este modelo contrasta con su capacidad amortiguadora que, al mismo tiempo, favorece una conducción más dinámica y natural del pie. Sin lugar a duda, un modelo de la firma americana que incluye una innovadora estructura, capaz de ofrecer una respuesta de calidad ¡independientemente de la distancia e intensidad del reto!',
            img: hokaCarbonGreen
        },
        {
            id:25,
            brand:'Asics',
            model:'Magic Speed 2', 
            size: 'eur40, eur41, eur42, eur43',
            price:220000,
            color:'#AFEB79',
            weight:'245gr',
            description:'La zapatilla MAGIC SPEED™ 2 ofrece la energía que necesitas para avanzar hacia una nueva marca personal. Hemos actualizado el ajuste y el diseño para que la zapatilla sea más versátil durante cualquier tipo de carrera. La entresuela cuenta con una placa de carbono y TPU que impulsa el pie hacia adelante. Esto ayuda a crear un efecto de rebote más suave y propulsivo durante la fase de despegue de la zancada. La capa superior de la entresuela está reconstruida con amortiguación FF BLAST™ PLUS. Ayuda a que tu pisada se sienta aún más propulsiva, manteniendo la ligereza de la zapatilla.',
            img: magicSpeedGreen
        },
        {
            id:26,
            brand:'Asics',
            model:'Magic Speed 2', 
            size: 'eur40, eur41, eur42, eur43',
            price:220000,
            color:'#CE2BBD',
            weight:'245gr',
            description:'La zapatilla MAGIC SPEED™ 2 ofrece la energía que necesitas para avanzar hacia una nueva marca personal. Hemos actualizado el ajuste y el diseño para que la zapatilla sea más versátil durante cualquier tipo de carrera. La entresuela cuenta con una placa de carbono y TPU que impulsa el pie hacia adelante. Esto ayuda a crear un efecto de rebote más suave y propulsivo durante la fase de despegue de la zancada. La capa superior de la entresuela está reconstruida con amortiguación FF BLAST™ PLUS. Ayuda a que tu pisada se sienta aún más propulsiva, manteniendo la ligereza de la zapatilla.',
            img: magicSpeedPurple
        },
        {
            id:27,
            brand:'Asics',
            model:'NovaBlast', 
            size: 'eur40, eur41, eur42, eur43',
            price:200000,
            color:'#000000',
            weight:'290gr',
            description:'"Los NOVABLAST™ 3 están inspirados en las formas geométricas del origami. Además de hacer que el modelo sea aproximadamente 30 g más liviano que la versión anterior, también lo hicimos más cómodo. La construcción en la parte superior ayuda a mejorar el ajuste y reduce el movimiento de la lengüeta. Este componente reforzado tiene un diseño de talón que brinda soporte',
            img: asicsNovaBlastBlack
        },
        {
            id:28,
            brand:'Asics',
            model:'Asics Running', 
            size: 'eur40, eur41, eur42, eur43',
            price:200000,
            color:'#000000',
            weight:'270gr',
            description:'No hay Descripcion Disponible',
            img: asicsSimpleBlack
        },
        {
            id:29,
            brand:'Asics',
            model:'Asics Running', 
            size: 'eur40, eur41, eur42, eur43',
            price:200000,
            color:'#01B703',
            weight:'270gr',
            description:'No hay Descripcion Disponible',
            img: asicsSimpleGreen
        },
        {
            id:30,
            brand:'Adidas',
            model:'Ultraboost Light', 
            size: 'eur40, eur41, eur42, eur43',
            price:220000,
            color:'##FB5205',
            weight:'295gr',
            description:'Descubre una energía épica con los nuevos Ultraboost Light, los Ultraboost más ligeros que hemos creado. La magia está en la mediasuela Light BOOST, una nueva generación de adidas BOOST. Su exclusivo diseño molecular logra la espuma BOOST más ligera hasta la fecha y ostenta una huella de carbono 10% más baja que los modelos anteriores (para más información ver las Preguntas frecuentes a continuación). Con cientos de cápsulas BOOST llenas de energía y lo último en amortiguación y comodidad, algunos pies pueden tenerlo todo.',
            img: ultraboostLight
        },

        {
            id:31,
            brand:'Adidas',
            model:'Duramo 2.0', 
            size: 'eur40, eur41, eur42, eur43',
            price:185900,
            color:'#000000',
            weight:'275gr',
            description:'Mantén tus pies cómodos y tu estilo impecable en todo momento con estos tenis adidas. Úsalos con tus shorts de running favoritos para lucir un look deportivo y casual. El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos. Hechos con una serie de materiales reciclados, su exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.',
            img: duramo
        },
        {
            id:32,
            brand:'Nike',
            model:'Vaporfly', 
            size: 'eur40, eur41, eur42, eur43',
            price:195900,
            color:'#000000',
            weight:'250gr',
            description:'Las Nike Vaporfly se erigen como uno de los lanzamientos más destacados de Nike Running para el 2021. Un modelo que ha hecho historia posicionándose como una de las opciones más rápidas de la firma norteamericana y cuya segunda actualización promete seguir cosechando innumerables éxitos. Puestas en escena con la figura del gran Eliud Kipchoge calzándose su versión original, estas actualizadas Vaporfly se renuevan para seguir presentándose como es opción fiable como zapatilla de competición para seguir superando objetivos y batiendo récords.',
            img: vaporflyBlack
        },
        {
            id:33,
            brand:'New Balance',
            model:'FuelCell Elite', 
            size: 'eur36, eur37, eur38, eur39',
            price:209900,
            color:'#91C2C9',
            weight:'290gr',
            description:'FuelCell Elite, son los tenis que te acompañan tanto para las competencias mas exigentes como para tus entrenamientos intensos y veloces. Esta calzado de correr cuenta con la mayor capacidad de respuesta creada hasta la fecha por New Balance, cuenta con nuestra EVA de tecnología y rendimiento FuelCell ® una de las mejores en rebote actualmente en el mercado, y esto lo complementa la placa en fibra de carbono ubicada en toda la longitud completa de la media suela, entregando un retorno de energía y la propulsión que todo atleta busca para mejorar sus tiempos. El talón proporciona soporte adicional y la espuma moldeada del cuello del pie, proporciona un ajuste increíble. La malla de ingeniería en la parte superior es transpirable para mayor comodidad, mientras que el logo de NB ubicado en la parte superior del antepie le añade un look atrevido y explosivo.',
            img: newBalanceFullCell
        },
        {
            id:34,
            brand:'New Balance',
            model:'FuelCell Elite', 
            size: 'eur36, eur37, eur38, eur39',
            price:209900,
            color:'#D04D91',
            weight:'290gr',
            description:'FuelCell Elite, son los tenis que te acompañan tanto para las competencias mas exigentes como para tus entrenamientos intensos y veloces. Esta calzado de correr cuenta con la mayor capacidad de respuesta creada hasta la fecha por New Balance, cuenta con nuestra EVA de tecnología y rendimiento FuelCell ® una de las mejores en rebote actualmente en el mercado, y esto lo complementa la placa en fibra de carbono ubicada en toda la longitud completa de la media suela, entregando un retorno de energía y la propulsión que todo atleta busca para mejorar sus tiempos. El talón proporciona soporte adicional y la espuma moldeada del cuello del pie, proporciona un ajuste increíble. La malla de ingeniería en la parte superior es transpirable para mayor comodidad, mientras que el logo de NB ubicado en la parte superior del antepie le añade un look atrevido y explosivo.',
            img: fuelCellPink
        },
        {
            id:35,
            brand:'New Balance',
            model:'FuelCell Elite', 
            size: 'eur36, eur37, eur38, eur39',
            price:209900,
            color:'#000000',
            weight:'290gr',
            description:'FuelCell Elite, son los tenis que te acompañan tanto para las competencias mas exigentes como para tus entrenamientos intensos y veloces. Esta calzado de correr cuenta con la mayor capacidad de respuesta creada hasta la fecha por New Balance, cuenta con nuestra EVA de tecnología y rendimiento FuelCell ® una de las mejores en rebote actualmente en el mercado, y esto lo complementa la placa en fibra de carbono ubicada en toda la longitud completa de la media suela, entregando un retorno de energía y la propulsión que todo atleta busca para mejorar sus tiempos. El talón proporciona soporte adicional y la espuma moldeada del cuello del pie, proporciona un ajuste increíble. La malla de ingeniería en la parte superior es transpirable para mayor comodidad, mientras que el logo de NB ubicado en la parte superior del antepie le añade un look atrevido y explosivo.',
            img: fuelCellBlack
        },
        {
            id:36,
            brand:'Hoka',
            model:'Carbon-X', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#6CADAA',
            weight:'240gr',
            description:'Unas zapatillas de competición orientadas a ofrecer una estabilidad y protección superiores en carrera. La ligereza de este modelo contrasta con su capacidad amortiguadora que, al mismo tiempo, favorece una conducción más dinámica y natural del pie. Sin lugar a duda, un modelo de la firma americana que incluye una innovadora estructura, capaz de ofrecer una respuesta de calidad ¡independientemente de la distancia e intensidad del reto!',
            img: CarbonXWhite
        },
        {
            id:37,
            brand:'Hoka',
            model:'Carbon-X', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#000000',
            weight:'240gr',
            description:'Unas zapatillas de competición orientadas a ofrecer una estabilidad y protección superiores en carrera. La ligereza de este modelo contrasta con su capacidad amortiguadora que, al mismo tiempo, favorece una conducción más dinámica y natural del pie. Sin lugar a duda, un modelo de la firma americana que incluye una innovadora estructura, capaz de ofrecer una respuesta de calidad ¡independientemente de la distancia e intensidad del reto!',
            img: CarbonXBlack
        },
        {
            id:38,
            brand:'OnCloud',
            model:'Cloud Monster', 
            size: 'eur40, eur41, eur42, eur43',
            price:205000,
            color:'#74797D',
            weight:'290gr',
            description:'Las On Cloudmonster llegan revolucionando la estética de las zapatillas de running de la firma suiza. Un estilo completamente nuevo que le aporta toques modernos y llamativos a esta zapatilla de entrenamiento. Se trata de un modelo nuevo, un auténtico monstruo para runners de pisada neutra y que quieran recorrer desde distancias medias hasta las más largas. Además, entre sus prestaciones más destacadas incluye máxima amortiguación que te permitirá correr con mayor comodidad sobre el asfalto. ',
            img: OnCloudMonsterWhite
        },
        {
            id:39,
            brand:'OnCloud',
            model:'Cloud Monster', 
            size: 'eur40, eur41, eur42, eur43',
            price:205000,
            color:'#737D75',
            weight:'290gr',
            description:'Las On Cloudmonster llegan revolucionando la estética de las zapatillas de running de la firma suiza. Un estilo completamente nuevo que le aporta toques modernos y llamativos a esta zapatilla de entrenamiento. Se trata de un modelo nuevo, un auténtico monstruo para runners de pisada neutra y que quieran recorrer desde distancias medias hasta las más largas. Además, entre sus prestaciones más destacadas incluye máxima amortiguación que te permitirá correr con mayor comodidad sobre el asfalto. ',
            img: OnCloudMonsterGrey
        },
        {
            id:40,
            brand:'Asics',
            model:'Kinsei', 
            size: 'eur40, eur41, eur42, eur43',
            price:195000,
            color:'#D2EFD9',
            weight:'300gr',
            description:'Las zapatillas GEL-KINSEI™ Blast están diseñadas para corredores de fondo que buscan una pisada suave. Mantienen tu mente y cuerpo energizados para lograr tus objetivos de entrenamiento. Un arreglo de tecnología GEL™ y amortiguación FF BLAST™ crea un paso suave pero receptivo. Después de entrar en la fase de aterrizaje, el zapato te impulsa hacia adelante con una transición suave. La forma de la entresuela está inspirada en la curvilínea espada katana de un samurái. Con una placa de Pebax en el centro, esta característica redirige tu movimiento hacia adelante y te da una sensación de velocidad mientras corres.',
            img: AsicsKinsei
        },
        {
            id:41,
            brand:'Asics',
            model:'Gel Nimbus 24', 
            size: 'eur40, eur41, eur42, eur43',
            price:205000,
            color:'#D5D6DA',
            weight:'280gr',
            description:'Nuestra 24ª versión de las GEL-NIMBUS™ sigue avanzando dentro de su línea ofreciendo a los corredores de larga distancia una sujeción y comodidad mejorada. Las GEL-NIMBUS 24 proporcionan una excelente absorción de impactos y suavidad a los corredores, así como más compresión en el talón gracias a su suave unidad de tecnología de amortiguación GEL™ y sus líneas de diseño contorneadas. La estabilidad mejorada garantiza una pisada más equilibrada que se complementa con transiciones más fluidas.',
            img: AsicsGelNimbus24
        },
        {
            id:42,
            brand:'Nike',
            model:'Invincible Run 2', 
            size: 'eur38 ,eur39, eur40, eur41, eur42, eur43',
            price:195000,
            color:'#000000',
            weight:'280gr',
            description:'Las zapatillas de running que presenta la marca americana están siempre a la vanguardia en cuanto a materiales y tecnología, siendo estas Nike ZoomX Invincible Run Flyknit 2 el fiel reflejo de una zapatilla bien hecha, por lo que como se dice, para qué tocar algo que funciona. Se trata de un modelo con una amortiguación exquisita, la cual va a satisfacer las necesidades de aquellos runners que busquen una zapatilla cómoda y con un toque de reactividad, ideal para todo tipo de entrenos, pero sobre todo, para rodar largo y tranquilo.',
            img: InvincibleRun2
        },
        {
            id:43,
            brand:'Nike',
            model:'Goretex', 
            size: 'eur38 ,eur39, eur40, eur41, eur42, eur43',
            price:200000,
            color:'#884355',
            weight:'330gr',
            description:'Las Nike Pegasus Trail 2 GORE-TEX han sido diseñadas para conquistar las rutas de trail más exigentes y hacerle frente a las condiciones climáticas más adversas. La versión impermeable de las exitosas Pegasus Trail 2 de Nike Running, ha sido optimizada para adaptarse a las rutas de trail más exigentes y garantizar una protección superior frente a la humedad y el frío; protagonistas durante la época invernal.',
            img: goretexRed
        },
        {
            id:44,
            brand:'Nike',
            model:'Zoom Fly 4', 
            size: 'eur37, eur38, eur39, eur40, eur41, eur42, eur43',
            price:185000,
            color:'#EE5758',
            weight:'290gr',
            description:'esta cuarta edición de las Nike Zoom Fly presenta como principal novedad el rediseño total de su corte superior. Los desarrolladores de producto de la marca de Oregón han apostado por sustituir el tejido VaporWeave transparente por una malla técnica de ingeniería con tejido Flyknit. Este cambio en la parte superior supone una sensación de mayor suave y confort, pero también de máxima transpirabilidad. Además, como valor añadido, este recurso de la tecnología Flyknit implementa todo ese entramado de fibras más ligeras y resistentes, y que se hacen notar en estas Nike Zoom Fly 4 con una mayor grado de soporte en la zona del mediopié',
            img: ZoomFly4Pink
        }
    ]

    const allAdidas = AllTennis.filter(item=>{
        return item.brand === 'Adidas'
    })

    const allNike = AllTennis.filter(item=>{
        return item.brand === 'Nike'
    })

    const allAsics = AllTennis.filter(item=>{
        return item.brand === 'Asics'
    })

    const allNewBalance = AllTennis.filter(item=>{
        return item.brand === 'New Balance'
    })

    const allHoka = AllTennis.filter(item=>{
        return item.brand === 'Hoka'
    })

    const allOnCloud = AllTennis.filter(item=>{
        return item.brand === 'OnCloud'
    })



  return {
    AllTennis,
    allAdidas,
    allNike,
    allAsics,
    allNewBalance,
    allHoka,
    allOnCloud
  }
}

export default Api