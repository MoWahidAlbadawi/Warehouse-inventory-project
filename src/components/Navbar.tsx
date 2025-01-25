import { Box, Flex, Heading, Spacer, Text , Button} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react"
//for improve seo
const Navbar = () => {
    const [t , il8n ] = useTranslation();
    const MotionButton = motion(Button);
    const changeLanguage = (lng: string) =>  {
        if (lng === 'en') {
         il8n.changeLanguage('ar');
        } 
        else {
         il8n.changeLanguage('en');
        }
     };

    return <Box as='nav' color='white' bg='blue.500' p={{base : '5px' , sm : '10px' , md :'20px'}} borderRadius='7px'>
        <Flex alignItems={'center'}>
        <MotionButton className="button-language" initial={{y : -100}} animate={{y : 0}} 
        transition={{duration : 1.5 , type : 'spring' , mass : 2 }}
        onClick={() => changeLanguage(il8n.language)}>{il8n.language === 'ar' ? 'En ' : 'Ar'}</MotionButton>
            <Heading as='h1' fontSize={{base : 'md' , sm : 'xl' , md : '2xl'}} width={{base : '100px' , sm : 'fit-content'}} m={{base : '15px 3px' , md : '10px'}}>{t('mainTitle')}</Heading>
            {/* <Heading as='h5' className="__Navbar-logo" mt='23px' ml={{base : '-80px',md : '-100px'}} fontSize={{base : 'sm' , md:'lg'}}>to </Heading> */}
            <Spacer />
            <Flex gap={{base : '10px' , md : '30px'}} justifyContent={'center'} alignItems={'center'}>
            <NavLink to='/addgoods' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'md' , sm: 'xl' , md: '2xl'}}>{t('addItem')}</Text></NavLink>
                <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'md' , sm : 'xl' , md:'2xl'}}>{t('warehouseCard')}</Text></NavLink>
            </Flex>
        </Flex>
    </Box>
}
export default Navbar;
