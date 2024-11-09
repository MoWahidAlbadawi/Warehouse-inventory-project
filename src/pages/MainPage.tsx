import NoItems from "../components/NoItems";
import {  Box , Card, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { itemType } from "../Types/Types";
import { goodsActions } from "../store";
import { VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { toast , Toaster } from 'react-hot-toast';
import { BiBookmarkPlus , BiBookmarkMinus  } from "react-icons/bi";
const MainPage = () => {
    const dispatch = useDispatch();
    const [searchTool , setSearchTool] = useState<string>('');
    const items = useSelector((state : {items : itemType[]}) => state.items);
    function addByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 1,
        }));
        toast('تم زيادة عنصر واحد',{
            position : 'bottom-center',
            duration : 1500,
            style : {
                backgroundColor : '#2379c49e',
                padding : '10px',
                borderRadius : '10px',
                color : 'white'
            },
            icon : <BiBookmarkPlus />,
        });
    }

    function removeByMinus (name : string) : void {
        dispatch(goodsActions.removeItem(name));
        toast('تم سحب عنصر واحد',{
            position : 'bottom-center',
            duration : 1500,
            style : {
                backgroundColor : '#c4123bd1',
                padding : '10px',
                borderRadius : '10px',
                color : 'white'
            },
            icon : <BiBookmarkMinus />,
        });
    }

    function changeSearchHandler (e : React.ChangeEvent<HTMLInputElement>) {
        setSearchTool(e.target.value);
    }
    const filteredItems : itemType[]= items.filter((item : itemType) => item.itemName.toLowerCase().includes(searchTool.toLowerCase()));
    const [hasItems , setHasItems] = useState<boolean>(filteredItems.length !== 0);
    useEffect(() => {
        setHasItems(items.length !== 0);
    },[items]);
    useEffect(() => {
        localStorage.setItem('items' , JSON.stringify(filteredItems));
    },[filteredItems]);
    return (
    <Box p='5px'>
        {!hasItems && <NoItems />}
    {hasItems && <Box w={{base : '3/4' , sm : '1/2',  md : '1/4'}} display={'flex'} mb='20px' ml={{base : '10%' , sm : '25%' , md:'40%'}}> 
        <Input placeholder="search..." size="sm" colorPalette={'blue'} variant={'subtle'} mt='4px' p='10px' value={searchTool} 
         bg='gray.100'   
         color={'blackAlpha.800'}
         onChange={changeSearchHandler} />
        <Box fontSize={'lg'} color={'gray.400'} m='12px 0 0 -30px' zIndex={'3'}><VscSearch /></Box>
        </Box>}
    {hasItems && <SimpleGrid gap='10px' minChildWidth='300px'  direction={'rtl'} >
    {filteredItems.map((item : itemType) => <Card.Root p='0px 30px 20px' borderTopWidth='8px' borderTopColor='blue.500' marginLeft={{base : '5px' , sm : '0'}}
    bg='gray.50'
    color={'blackAlpha.900'}>
        {/* <Card.Header textAlign={'center'}>
            <Text>مجمع زهرة الكميليا</Text>
            <Text ml={'30px'} mt={'-7px'}>Camellia Market</Text>
        </Card.Header> */}
        <Card.Body my={'20px'} borderColor={'blue.200'} borderWidth={'0 0 1px 0 '} paddingBottom='10px'>
        <Heading>{item.itemName}</Heading>
        <Text mt='4px' mr='-10px'>شركة {item.companyName}</Text>
            <Heading mt='10px' color='blue.500'> x{item.quantity} طرد</Heading>
            </Card.Body>
        <Card.Footer textAlign={'center'}>
            <button className="__Main-page-button" onClick={() => addByPlus(item)}>+</button>
            <button className="__Main-page-button" onClick={() => removeByMinus(item.itemName)}>-</button>
            <Toaster />
        </Card.Footer>
    </Card.Root>)}
    </SimpleGrid>}
    </Box>
);
}
export default MainPage;
