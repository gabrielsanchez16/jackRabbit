import React, { createContext, useState } from 'react'

export const ResultSearchContext = createContext()

const ResultSearchProvider = ({ children }) => {

    const [resultados, setResultados] = useState([0])

    const changeValue = e => {
        
        if(e === ''){
            setResultados([0])
        }
        setResultados(e)
    }

    return (
        <ResultSearchContext.Provider value={{resultados,changeValue}}>
            {children}
        </ResultSearchContext.Provider>
  )
}

export{
    ResultSearchProvider
}

export default ResultSearchContext


