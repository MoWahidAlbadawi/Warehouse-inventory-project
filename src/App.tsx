import {Container} from "@chakra-ui/react"
import { Route , Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddGoods from "./pages/AddGoods"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar />
      <Container bg='gray.200' minHeight='70vh' p={{base : '5px' , sm : '20px'}}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/addgoods" element={<AddGoods/>}/>
      </Routes>
    </Container>
    <Footer />
    </>
  )
}

export default App
