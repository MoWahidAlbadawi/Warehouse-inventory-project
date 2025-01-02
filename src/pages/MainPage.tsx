import NoItems from "../components/NoItems";
import {  Box , Button , Card, Heading, Icon, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { itemType } from "../Types/Types";
import { goodsActions } from "../store";
import { VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { toast , Toaster } from 'react-hot-toast';
import { BiBookmarkPlus , BiBookmarkMinus  } from "react-icons/bi";
import { Stack } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next"
const MainPage = () => {
    const [t , il8n] = useTranslation();
    const [direction , setDirection] = useState('rtl');
    const [activeNameCard , setActiveNameCard] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [searchTool , setSearchTool] = useState<string>('');
    const items = useSelector((state : {items : itemType[]}) => state.items);

    useEffect(() => {
        if(il8n.language === 'ar') {
            setDirection('rtl');
        } 
        else {
            setDirection('ltr');
        }
    }, [il8n.language]);
    //Add buttons
    function addQuarterByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 0.25,
        }));
        toast(t('addItemButton'),{
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
    function addHalfByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 0.5,
        }));
        toast(t('addItemButton'),{
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
    function addOneByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 1,
        }));
        toast(t('addItemButton'),{
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
    function addFiveByPlus (item : itemType) : void {
        dispatch(goodsActions.addItem({
            ...item ,
            quantity : 5,
        }));
        toast(t('addItemButton'),{
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
    //remove buttons
    function removeQuarterByMinus (item  : itemType) : void {
        dispatch(goodsActions.removeItem({
            ...item,
            quantity : 0.25,
        }));
        toast(t('removeItemButton'),{
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
    function removeHalfByMinus (item  : itemType) : void {
        dispatch(goodsActions.removeItem({
            ...item,
            quantity : 0.5,
        }));
        toast(t('removeItemButton'),{
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
    function removeOneByMinus (item  : itemType) : void {
        dispatch(goodsActions.removeItem({
            ...item,
            quantity : 1,
        }));
        toast(t('removeItemButton'),{
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
    function removeFiveByMinus (item  : itemType) : void {
        dispatch(goodsActions.removeItem({
            ...item,
            quantity : 5,
        }));
        toast(t('removeItemButton'),{
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
    const [hasItems , setHasItems] = useState<boolean>(items.length !== 0);
    useEffect(() => {
        setHasItems(items.length !== 0);
    },[items]);
    useEffect(() => {
        localStorage.setItem('items' , JSON.stringify(items));
    },[items]);
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
    {hasItems && <SimpleGrid gap='10px' minChildWidth='300px' direction={direction}>
    {filteredItems.map((item : itemType,index) => <Card.Root key={index} p='0px 30px 20px' borderTopWidth='8px' borderTopColor='blue.500' marginLeft={{base : '5px' , sm : '0'}}
    bg='gray.50'
    color={'blackAlpha.900'}>
        <Card.Body my={'20px'} borderColor={'blue.200'} borderWidth={'0 0 1px 0 '} paddingBottom='10px'>
        <Heading>{item.itemName}</Heading>
        <Text mt='4px' mr='-10px'>{`${t('company')} ${item.companyName}`}</Text>
            <Heading mt='10px' color='blue.600'>{`x${item.quantity}`}</Heading>
            </Card.Body>
        <Card.Footer mr={-2} textAlign={'center'}>
            <Stack>
            <Box>
                {activeNameCard != item.itemName && <Button onClick={() => setActiveNameCard(item.itemName)}
                    background='gray.50' fontSize={'20px'} color={'blue.700'}>
                    Edit<Icon><FaEdit /></Icon></Button>}
                {activeNameCard == item.itemName && <Button onClick={() => setActiveNameCard(null)}
                    background='gray.50' fontSize={'20px'} color={'red.600'}>
                    Close<Icon><IoClose /></Icon></Button>}
            </Box>
            {(activeNameCard == item.itemName) && <Stack>
            <Stack gap={1} direction={'row'}>
            <button className="__Main-page-button-add" onClick={() => addQuarterByPlus(item)}>+0.25</button>
            <button className="__Main-page-button-add" onClick={() => addHalfByPlus(item)}>+0.5</button>
            <button className="__Main-page-button-add" onClick={() => addOneByPlus(item)}>+1</button>
            <button className="__Main-page-button-add" onClick={() => addFiveByPlus(item)}>+5</button>
            </Stack>
            <Stack gap={1} direction={'row'} >
            <button className="__Main-page-button-remove" onClick={() => removeQuarterByMinus(item)}>-0.25</button>
            <button className="__Main-page-button-remove" onClick={() => removeHalfByMinus(item)}>-0.5</button>
            <button className="__Main-page-button-remove" onClick={() => removeOneByMinus(item)}>-1</button>
            <button className="__Main-page-button-remove" onClick={() => removeFiveByMinus(item)}>-5</button>
            </Stack>
            </Stack>}
            </Stack>
            <Toaster />
        </Card.Footer>
    </Card.Root>)}
    </SimpleGrid>}
    </Box>
);
}
export default MainPage;
