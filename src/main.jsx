import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from "react-router-dom";
import './index.css'


<form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="nombre" />
      <input type="text" name="asunto" />
      <input type="text" name="telefono" />
      <textarea name="descripcion"></textarea>
</form>

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  

)
