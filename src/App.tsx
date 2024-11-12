import { Box, Container , Button , Text} from "@chakra-ui/react"
import { Route , Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddGoods from "./pages/AddGoods"
import Navbar from "./components/Navbar"
import { useTranslation } from 'react-i18next';

function App() {
  const [t , il8n] = useTranslation();

  const changeLanguage = (lng: string) =>  {
     il8n.changeLanguage(lng);
  };
  
  return (
    <>
    <Navbar />
      <Container bg='gray.300' minHeight='90vh' p='20px'>
      <Box textAlign={'right'}>
        <Text color={'blue.800'} mb={'5px'} mr={'10px'}>{t('selectLanguage')}</Text>
    <Button onClick={() => changeLanguage('en')} colorPalette={'blue'} variant={'subtle'} padding={'10px'} mr={'5px'}>English</Button>
    <Button onClick={() => changeLanguage('ar')} colorPalette={'blue'} variant={'subtle'} padding={'10px'}>العربية</Button>
    </Box>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/addgoods" element={<AddGoods />}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
