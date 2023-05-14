import React from 'react'

const Header = () =>{

    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 10000);


  return {
    counter,
  }
    
  
}

export default Header