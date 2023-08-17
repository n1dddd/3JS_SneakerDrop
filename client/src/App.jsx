import Index from "./canvas/index"
import Home from "./pages/Home"
import Descriptions from "./pages/Descriptions"
import LoadingScreen from "./components/LoadingScreen"
import "./app.css"
import { Suspense, useState } from "react"


function App() {

  const [start, setStart] = useState(false);
  return (
    <section className='home'>
      <Suspense fallback={null}>
        <Home />
        <Index />
        <Descriptions />
      </Suspense>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </section>
  )
}

export default App
