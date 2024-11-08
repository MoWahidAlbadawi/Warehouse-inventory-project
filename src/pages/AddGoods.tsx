//import item type
import { itemType } from "../Types/Types";

import { Button , Box, Input} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goodsActions } from "../store";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const AddGoods = () => {
    const dispatch = useDispatch();
    const [itemName,setItemName] = useState<string>('');
    const [companyName , setCompanyName] = useState<string>('');
    const [quantity,setQuantity] = useState<number>(0);
    const navigate = useNavigate();
    function changeItemNameHandler(e : React.ChangeEvent<HTMLInputElement>) {
        setItemName(e.target.value);
    }
    function changeCompanyNameHandler(e : React.ChangeEvent<HTMLInputElement>) {
        setCompanyName(e.target.value);
    }
    function changeQuantityHandler(e : React.ChangeEvent<HTMLInputElement>) {
        setQuantity(parseInt(e.target.value));
    }
    function submitDataHandler (e : React.FormEvent) {
        e.preventDefault();
        if(itemName.trim() == '' || companyName.trim() == '' || quantity == 0) {
            return;
        }
        const item : itemType= {
            itemName,
            companyName,
            quantity,
        }
        dispatch(goodsActions.addItem(item));
        toast('تمت اضافة العنصر بنجاج',{
            duration : 2000,
            position : "bottom-center",
            style : {
                backgroundColor : '#3b82f6',
                padding : '10px',
                borderRadius : '10px',
                color : 'white'
            },
            icon: <IoCheckmarkDoneCircleSharp />,
        });
        setTimeout(() => {navigate('/')} , 2000);
        setItemName('');
        setCompanyName('');
        setQuantity(0);
    }
    return( 
        <form className="__AddGoodsform" onSubmit={submitDataHandler}>
        <Box m={'15px 10px'}> 
        <label className="__AddGoodslabel">اسم الصنف</label>
        <Input value={itemName} placeholder="ادخل اسم الصنف" size="lg" colorPalette={'blue'} variant={'subtle'} paddingRight={'10px'} mt='4px'
        bg='gray.100'
        onChange={changeItemNameHandler}/>
        </Box>
        <Box m={'15px 10px'}> 
        <label className="__AddGoodslabel">اسم الشركة المصنعة</label>
        <Input value={companyName} placeholder="ادخل اسم الشركة المصنعة" size="lg" colorPalette={'blue'} variant={'subtle'} paddingRight={'10px'} mt='4px' 
        bg='gray.100'
        onChange={changeCompanyNameHandler}/>
        </Box>
        <Box m='15px 10px'>
        <label className="__AddGoodslabel">الكمية</label>
        <Input value={quantity} type='number' placeholder="الكمية هنا" size="lg" colorPalette={'blue'} variant={'subtle'} paddingRight={'10px'} mt='4px' 
        bg='gray.100'
        onChange={changeQuantityHandler}/>
        </Box>
        <Box>
        <Box textAlign={'left'}>
    <Button type="submit" colorPalette={'blue'} padding={'10px 20px'} m={'20px'} fontSize={'larger'}>إضافة</Button>
    </Box>
    </Box>
        <Toaster />
    </form>
    );
}
export default AddGoods;


