import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return <Box as='nav' color='white' bg='blue.500' p={{base : '10px' , md :'20px'}} borderRadius='7px'>
        <Flex>
            <Heading fontSize={{base : 'sm' , md : 'lg'}}>مجمع زهرة الكميليا</Heading>
            <Heading mt='24px' ml={{base : '-90px' , md : '-110px'}} fontSize={{base : 'sm' , md:'lg'}}>Camellia Market</Heading>
            <Spacer />
            <Flex gap={{base : '15px' , md : '30px'}} m={{base : '15px 3px' , md : '10px 30px'}} wrap='wrap'>
            <NavLink to='/addgoods' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'sm' , sm: 'xl' , md: '2xl'}}>إضافة بضاعة</Text></NavLink>
                <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}><Text fontSize={{base : 'sm' , sm : 'xl' , md:'2xl'}}>بطاقة مستودع</Text></NavLink>
            </Flex>
        </Flex>
    </Box>
}
export default Navbar;
