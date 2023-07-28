import Index from "./canvas/index"
import Home from "./pages/Home"
import Descriptions from "./pages/Descriptions"
import "./app.css"


function App() {
  return (
    <section className='home'>
        <Home />
        <Index />
        <Descriptions />
    </section>
  )
}

export default App
