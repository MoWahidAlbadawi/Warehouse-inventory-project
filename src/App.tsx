import { Container } from "@chakra-ui/react"
import { Route , Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddGoods from "./pages/AddGoods"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
    <Navbar />
      <Container bg='gray.200' minHeight='90vh' p='20px'>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/addgoods" element={<AddGoods />}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
