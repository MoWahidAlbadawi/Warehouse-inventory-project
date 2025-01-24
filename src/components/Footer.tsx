import { Text , Box , Flex , Link} from "@chakra-ui/react";
import MyPhoto from '../assets/Mohammad.jpg';
import { Avatar } from "./ui/avatar";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Helmet } from "react-helmet";
const Footer = () => {
return <Flex as='footer' p={'25px 20px'} bg='blue.200' 
color='gray.600'justifyContent={'space-around'} wrap={'wrap'} minWidth={'300px'} width={'100%'}>
        <Box width={'50%'}>
            <Flex gap={3}>
            <Box>
            <Avatar name='Mohammad Wahid Albadawi' src={MyPhoto} />
            </Box>
            <Box>
                <Helmet>
            <Text color='gray.900'fontWeight={'semibold'} fontSize={{base : 'sm' , md : 'lg'}}>MOHAMMAD WAHID ALBADAWI</Text>
            </Helmet>
            <Text>ALL RIGHTS RESERVED</Text>
            </Box>
            </Flex>
        </Box>
        <Box width={'30%'}>
            <Text color={'gray.900'} fontWeight={'semibold'} mb={2} fontSize={{base : 'sm' , sm : 'md' , md : 'lg'}} textAlign={'center'}>CONTACT ME</Text>
            <Flex gap={3} justifyContent={'center'}>
            <Link href="https://www.facebook.com/mohammad.albadawi.77312?mibextid=ZbWKwL" color={'gray.900'}><FaFacebook /></Link>
            <Link href="https://www.linkedin.com/in/mohammad-wahid-albadawi-8a8646312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color={'gray.900'}><FaLinkedin /></Link>
            <Link href="https://t.me/MWahid7" color={'gray.900'}><FaTelegram /></Link>
            </Flex>
        </Box>
    </Flex>
}
export default Footer;