import { Box, Container , Text} from "@chakra-ui/react"
import { Route , Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddGoods from "./pages/AddGoods"
import Navbar from "./components/Navbar"
import { useTranslation } from 'react-i18next';
import Footer from "./components/Footer"

function App() {
  const [t , il8n] = useTranslation();

  const changeLanguage = (lng: string) =>  {
     il8n.changeLanguage(lng);
  };
  
  return (
    <>
    <Navbar />
      <Container bg='gray.200' minHeight='90vh' p='20px'>
      <Box textAlign={'right'} mt={{base : '-10px' , md : '-5px'}} mb={{base :  '10px' , md : '0px'}}>
        <Text color={'blue.800'} mb={'5px'} mr={'10px'}>{t('selectLanguage')}</Text>
    <button onClick={() => changeLanguage('en')} className="button-language">English</button>
    <button onClick={() => changeLanguage('ar')} className="button-language">العربية</button>
    </Box>
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
