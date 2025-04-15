
import { Suspense } from 'react'
import './App.css'
import Daisynav from './components/DaistNav/daisynav'
import Navber from './components/navber/navber'
import Pricirgoption from './components/navber/pricirgOption/pricirgoption'
import Resultchart from './components/resultChart/resultchart'

function App() {
 const pricingPromice =fetch('pricing.json').then(res=>res.json())

  return (
    <>
     <header>
      <Navber></Navber>
        {/* <Daisynav></Daisynav> */}
     </header>

      <main>
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Pricirgoption pricingPromice={pricingPromice}></Pricirgoption>
          </Suspense>
          <Resultchart></Resultchart>
      </main>
     
    </>
  )
}

export default App
