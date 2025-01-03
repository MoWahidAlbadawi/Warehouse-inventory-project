import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [t ] = useTranslation();
    return <Box as='nav' color='white' bg='blue.500' p={{base : '5px' , sm : '10px' , md :'20px'}} borderRadius='7px'>
        <Flex>
            <Heading fontSize={{base : 'sm' , md : 'lg'}}>مجمع زهرة الكميليا</Heading>
            <Heading className="__Navbar-logo" mt='23px' ml={{base : '-80px',md : '-100px'}} fontSize={{base : 'sm' , md:'lg'}}>Camellia Market</Heading>
            <Spacer />
            <Flex gap={{base : '10px' , md : '30px'}} m={{base : '15px 3px' , md : '10px 30px'}} >
            <NavLink to='/addgoods' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'md' , sm: 'xl' , md: '2xl'}}>{t('addItem')}</Text></NavLink>
                <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'md' , sm : 'xl' , md:'2xl'}}>{t('warehouseCard')}</Text></NavLink>
            </Flex>
        </Flex>
    </Box>
}
export default Navbar;
