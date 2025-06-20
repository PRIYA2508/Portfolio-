import { BrowserRouter , Route,Routes} from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
function App() { 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
