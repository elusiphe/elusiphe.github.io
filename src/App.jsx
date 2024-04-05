import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import NavBar from './components/NavBar'
import logo from '/Users/Elusiphe/Documents/introtoreact/jamz-react-app/src/components/JaMz React Logo.png'
import jar from '/Users/Elusiphe/Documents/introtoreact/jamz-react-app/src/components/jam jar.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="header">
      <img class='jamzlogo' src={logo}></img>
      <NavBar />
    </div>
    <div class="bulk">
      <div class="bodytext">
        <h2 class="jamztext">Jamz</h2>
        <h1 class="reactapp">React App</h1>
      </div>
      <img id='jar' src={jar}></img>
    </div>
    </>
  )
  
}

export default App
