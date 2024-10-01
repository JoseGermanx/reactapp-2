
import './Button.css'

function Button({texto, colorDeFondo, textoADicional}) {



  return (

    <button className={colorDeFondo}>{texto} {textoADicional ? " Adicional" : null}</button>
  )
}

export default Button
