import axios from 'axios'
import  { useEffect, useState } from 'react'
import foodimg from '../assets/foodimage.png'
import foodimg2 from '../assets/classimage.png'

 export type Menu = {
    _id: string;
    name: string;
    description:string;
    items:MenuItem[]
  };

   export type MenuItem={
    _id:string;
    name:string;
    description:string;
    price:string;
    menuId:string;
  }

const Showmenus = () => {
    const [menus,setmenus]=useState([])
    const [menuItem,setmenuItem]=useState<Menu>()
     useEffect(()=>{
        const fetchmenus=async()=>{
            try {
                const response= await axios.get('https://menucreater-server.onrender.com/api/menus')
                setmenus(response.data)
                console.log(response.data,'this is responce ');
                
            } catch (error) {
                console.log(error,'error');
                alert(error)
                
            }

        }
        fetchmenus()

        
     },[])
     

     const fetchmeuItem=async(id:string)=>{
            try {
                const response=await axios.get(`https://menucreater-server.onrender.com/api/menu/${id}`)
                setmenuItem(response.data)
                console.log(response.data);
                

            } catch (error) {
                alert(error)
            }

        }

     return (
       <div className='flex flex-col items-center'>
        <div className='text-white flex  '>
            {
                menus.map((data:Menu)=>(
                    <button className='bg-black font-bold focus:bg-blue-500 border p-3 border-white m-6' onClick={()=>fetchmeuItem(data._id)} >
                        {data.name}
                    </button>
                ))
            }

        </div>
        <div className='bg-black border border-white mt-28 h-auto w-8/12'>
        
        <div className='flex justify-center p-5'>
            <div className=''>
                 <img src={foodimg2} alt=""  className='w-28 h-40'/>
            </div>
           
            <p className='text-xl font-extrabold pr-2 text-white'>_______</p>
            <h1 className='text-5xl font-extrabold text-white '>BRUNCH COCKTAILS</h1>
            <p className='text-xl font-extrabold pl-2 text-white'>_______</p>
        </div>
        <div className='flex flex-wrap '>
           {
            menuItem?.items?.map((data:MenuItem)=>(
                <div className=' w-80 h-16 bg-black  p-2 m-6 '>
                    <div className='flex'>
                       <p className='font-bold  overflow-hidden text-white'>{data.name}................................................................................................................</p>
                       <p className='font-bold text-white'>&#x20B9;{data.price}</p>
                    </div>
                    <p className='font-serif text-gray-400'>{data.description}</p>
                    
                </div>
            ))
        } 
        </div>
        <div className='flex justify-end '>
            <img src={foodimg} alt="" className='w-20 h-40'/>
        </div>
        

        </div>
       </div>
         
      );
      
}

export default Showmenus