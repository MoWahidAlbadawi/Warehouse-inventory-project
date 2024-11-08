import NoItems from "../components/NoItems";
import {  Box, Button, Card, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { itemType } from "../Types/Types";
import { goodsActions } from "../store";
import { VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
const MainPage = () => {
    const dispatch = useDispatch();
    const [searchTool , setSearchTool] = useState<string>('');
    const items = useSelector((state : {items : itemType[]}) => state.items);
    function addByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 1,
        }));
    }
    function removeByMinus (name : string) : void {
        dispatch(goodsActions.removeItem(name));
    }
    function changeSearchHandler (e : React.ChangeEvent<HTMLInputElement>) {
        setSearchTool(e.target.value);
    }
    const filteredItems : itemType[]= items.filter((item : itemType) => item.itemName.toLowerCase().includes(searchTool.toLowerCase()));
    const [hasItems , setHasItems] = useState<boolean>(filteredItems.length !== 0);
    useEffect(() => {
        setHasItems(filteredItems.length !== 0);
    },[filteredItems]);
    useEffect(() => {
        localStorage.setItem('items' , JSON.stringify(filteredItems));
    },[filteredItems]);
    return (
    <Box p='20px'>
        {!hasItems && <NoItems />}
    {hasItems && <Box w={{base : '3/4' , sm : '1/2',  md : '1/4'}} display={'flex'} mb='20px' ml={{base : '10%' , sm : '25%' , md:'40%'}}> 
        <Input placeholder="search..." size="sm" colorPalette={'blue'} variant={'subtle'} mt='4px' p='10px' value={searchTool} onChange={changeSearchHandler}/>
        <Box fontSize={'lg'} color={'gray.400'} m='12px 0 0 -30px' zIndex={'3'}><VscSearch /></Box>
        </Box>}
    {hasItems && <SimpleGrid gap='10px' minChildWidth='300px'  direction={'rtl'} >
    {filteredItems.map((item : itemType) => <Card.Root p='15px 30px 25px' borderTopWidth='8px' borderTopColor='blue.500' marginLeft={{base : '5px' , sm : '0'}}>
        <Card.Header textAlign={'center'}>
            <Text>مجمع زهرة الكميليا</Text>
            <Text ml={'30px'} mt={'-7px'}>Camellia Market</Text>
        </Card.Header>
        <Card.Body my={'30px'} borderColor={'blue.100'} borderWidth={'1px 0 1px 0 '} paddingY='20px'>
        <Heading>{item.itemName}</Heading>
        <Text mt='4px' mr='-10px'>شركة {item.companyName}</Text>
            <Heading mt='20px' color='blue.500'> x{item.quantity} طرد</Heading>
            </Card.Body>
        <Card.Footer textAlign={'center'}>
            <Button p='10px' colorPalette='blue' variant='outline' px='10px' fontSize={'lg'} onClick={() => addByPlus(item)}>+</Button>
            <Button p='10px' colorPalette='blue' variant='outline' px='10px' fontSize={'lg'} onClick={() => removeByMinus(item.itemName)}>-</Button>
        </Card.Footer>
    </Card.Root>)}
    </SimpleGrid>}
    </Box>
);
}
export default MainPage;
