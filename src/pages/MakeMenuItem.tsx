import  { useEffect, useState } from "react";
import axios from 'axios';
import { Menu } from "../components/shomenus";

export default function MakeMenuItem() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu,setSelectedMenu]=useState('')
  const [itemname,setitmename]=useState('');
  const [itemdescription,setitmedescription]=useState('')
  const [itemprice,setitemprice]=useState('');
  const [menu,setmenu]=useState([])

  useEffect(()=>{
    fetchMenus()
  },[]);

  const fetchMenus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/menus'); 
      setmenu(response.data);
      
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const createMenuItem=async()=>{
    if(!selectedMenu|| !itemname||!itemdescription || !itemprice){
        return alert('Please fill in all fields and select a menu.')
    }
    try {
        const resonse=await axios.post('http://localhost:5000/api/menu-items',{
            name:itemname,
            description:itemdescription,
            price:itemprice,
            menuId:selectedMenu,
        });
        console.log(resonse.data);
        alert('menuItem added success fully')
        setitmename('')
        setitmedescription('')
        setitemprice('')

    } catch (error) {
        console.log('error to add menuitems',error);
    }

  }

  const handlesubmit=()=>{
    createMenuItem()
    setShowModal(false)
  }
  
  return (
    <>
      <button
        className="bg-black text-white active:bg-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create menuItem
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-white rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 text-white  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create MenuItem
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <select
          value={selectedMenu || ''}
          onChange={(e) => setSelectedMenu(e.target.value)}
          className="block w-full px-4 py-2 border rounded-lg mt-3 text-black"
        >
          <option value="" disabled>
            Select a Menu
          </option>
          {menu && menu?.map((menu:Menu) => (
            <option key={menu._id} value={menu._id}>
              {menu.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item Name"
          value={itemname}
          onChange={(e) => setitmename(e.target.value)}
          className="block w-full px-4 py-2 border rounded-lg mt-3 text-black"
        />

         <textarea
          placeholder="Item Description"
          value={itemdescription}
          onChange={(e) => setitmedescription(e.target.value)}
          className="block w-full px-4 py-2 border rounded-lg mt-3 text-black"
        />
        <input
          type="number"
          placeholder="Item Price"
          value={itemprice}
          onChange={(e) => setitemprice(e.target.value)}
          className="block w-full px-4 py-2 border rounded-lg mt-3 text-black"
        />
      </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <button
                    className="bg-white  text-black active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handlesubmit}
                  >
                    add menuItem 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}