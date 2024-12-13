
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import logo2 from '../../assets/logoimage2.png'
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";




const Footer = () => {
  return (
    <div>
        <div className='flex p-5 items-center justify-around' >
            <div className='bg-black w-80 h-32 rounded-xl border border-white flex flex-col justify-around items-center'>
                <p className='text-xl font-bold text-blue-600 p-4'>Connect with Us</p>
                <div className='flex items-center '>
                    <p className='inline text-white pr-1'><GiRotaryPhone  /></p>
                    <p className='text-white '>+91 9567843340</p>
                </div>
                <div className='flex items-center'>
                   <p className='text-white inline-block pr-1'><MdEmail   /></p> 
                    <p className='text-white'>info@deepnetsoft.com</p>
                </div>
                
            </div>
            <div className='bg-black w-80 h-32 rounded-xl border border-white flex flex-col overflow-visible items-center'>
                <div className='flex'>
                    <img src={logo2} alt="" className='w-24 h-24 ' />
                </div>
                
                <div className='flex  '>
                    <p className='text-xl font-bold text-blue-500 pr-3'>DEEP</p>
                    <p className='text-xl font-bold text-white pr-3'>NET</p>
                    <p className='text-xl font-bold text-gray-500 pr-3'>SOFT</p>
                </div>
                <div className='flex'>
                    <p className='text-gray-400 '><LuFacebook /></p>
                    <p className='text-gray-400'><BsTwitterX /></p>
                    <p></p>

                </div>
            </div>
            <div className='bg-black w-80 h-32 rounded-xl border border-white'>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <p className='text-blue-600 font-bold text-md '>FIND US </p>
                    <div className='flex '>
                        <p className='text-white pt-5'><IoLocation /></p>
                        <p className='text-gray-400'>First floor, Geo infopark, <br />Infopark EXPY, Kakkanad</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='text-gray-300 flex justify-between text-xs p-3 px-10'>
            <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
            <p>Terms & Conditions &nbsp; &nbsp;  Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer