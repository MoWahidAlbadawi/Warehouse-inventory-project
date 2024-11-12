import { Box, Text , Button} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const NoItems = () => {
    const {t} =  useTranslation();
    return (
        <Box textAlign={'center'} gap='10px'>
            <Text color={'blue.700'} fontSize={'lg'}> {t('descriptionNoItems')} </Text>
            <Button type="submit" colorPalette={'blue'} padding={'10px 20px'} m={'20px'} fontSize={'larger'}><Link to='/addGoods'>{t('add')}</Link></Button>
        </Box>
    );
};
export default NoItems;