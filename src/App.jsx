import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  async function download() {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
          setDeferredPrompt(null);
      }
    }
  }

  return (
    <>
      <h1>Pourquoi installer un PWA ?</h1>
      <div className="">
       <p>Accès en Or Ligne </p>
       <p>Plus rapide</p>
      </div>
      <h1>Comment installer l'application ?</h1>
      <div>
        <p>regadez à droite de la bare de naviagtion</p>
        {/* si plus de temps afficher le boutton en fonction du navigateur */}
        <div><p>cliquez sur :</p><img src="/download.png" alt="download button" /></div>
        <button onClick={() => {setShow(!show)}}>afficher le tuto ?</button>
        <div className='modal'>
          modal montant l'emplacement du bouton
          en absolut 
        </div>
      </div>
      <div className="intaller">
        <button onClick={download}>DOWNLOAD</button>
      </div>
    </>
  )
}

export default App
