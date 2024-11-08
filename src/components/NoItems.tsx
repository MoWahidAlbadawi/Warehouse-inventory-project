import { Box, Text , Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NoItems = () => {
    return (
        <Box textAlign={'center'} gap='10px'>
            <Text color={'blue.800'} fontSize={'lg'}> ليس لديك بضاعة مخزنة في المستودع </Text>
            <Text color={'blue.800'} fontSize={'lg'}> نرجو الشراء في أسرع وقت ممكن</Text>
            <Button type="submit" colorPalette={'blue'} padding={'10px 20px'} m={'20px'} fontSize={'larger'}><Link to='/addGoods'>إضافة</Link></Button>
        </Box>
    );
};
export default NoItems;