
import './App.css'
import Home from './views/Home'
import Button from './components/Button/Button'

function App() {

  console.log('render')
  return (
    <>
    <Home>
     <Button texto={"Enviar"} />
    </Home>
    </>
  )
}

export default App
