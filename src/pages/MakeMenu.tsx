import axios from "axios";
import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [menuName,setmenuName]=useState('')
  const [menudescription,setmenudescription]=useState('')

  const createmenus=async()=>{
    if (!menuName || !menudescription) return alert('Please fill in all fields.');

    try {
        const response=await axios.post('http://localhost:5000/api/menus',{
            name:menuName,
            description:menudescription
        });
        setmenuName('')
        setmenudescription('')
        console.log('this is response from ',response.data);
        
    } catch (error) {
        console.log(error,"error to creating menu");
    }
  }

  const buttonhandle=()=>{
       createmenus()
       setShowModal(false)
  }
  return (
    <>
      <button
        className="bg-black text-white active:bg-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create menu
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
                    Create Menu
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
                <input
                type="text"
               placeholder="Menu Name"
               value={menuName}
               onChange={(e)=>setmenuName(e.target.value)}
               className="block w-full px-4 py-2 border rounded-lg text-black"
               />
               <textarea
               placeholder="Menu Description"
               value={menudescription}
               onChange={(e)=>setmenudescription(e.target.value)}
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
                    onClick={buttonhandle}
                  >
                    add menu
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