
import { Suspense } from 'react'
import './App.css'
import Daisynav from './components/DaistNav/daisynav'
import Navber from './components/navber/navber'
import Pricirgoption from './components/navber/pricirgOption/pricirgoption'
import Resultchart from './components/resultChart/resultchart'
import axios from 'axios'
import Markschart from './components/marksChart/markschart'

function App() {
 const pricingPromice =fetch('pricing.json').then(res=>res.json());
const marksPromice=axios.get('markData.json');
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

          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Markschart marksPromice={marksPromice}></Markschart>
          </Suspense>

          <Resultchart></Resultchart>
      </main>
     
    </>
  )
}

export default App
