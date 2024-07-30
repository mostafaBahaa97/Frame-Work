import React, { useState } from 'react'
import { FaPlus, FaStar } from 'react-icons/fa'
import pic1 from '../assets/poert1.png'
import pic2 from '../assets/port2.png'
import pic3 from '../assets/port3.png'

export default function Portfolio() {
  const [pic, setPic] = useState()

function dis(e) {
    setPic(e.target.previousSibling.getAttribute('src'))
    document.getElementById('lightBox').classList.replace('hidden','flex')
  }
function hidden(e) {
    document.getElementById('lightBox').classList.replace('flex','hidden')
  }
  
  return (<>
    <div>
      <div className='bg-white flex flex-col justify-center items-center pt-6'>

      <h1 className='text-[#2C3E50] pb-3 text-4xl font-bold'>PORTFOLIO COMPONENT</h1>
      <div className='star1'><FaStar className='text-[#2C3E50] text-2xl ' /></div>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-10/12 m-auto py-5">
      <div className="relative group rounded overflow-hidden" >
            <img src={pic1} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold"><FaPlus /></h2>
            </div>
        </div>
      <div className="relative group rounded overflow-hidden">
            <img src={pic2} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold">
                  <FaPlus />

                </h2>
            </div>
        </div>
      <div className="relative group rounded overflow-hidden">
            <img src={pic3} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold">
                  <FaPlus />

                </h2>
            </div>
        </div>
      <div className="relative group rounded overflow-hidden">
            <img src={pic1} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold">
                  <FaPlus />

                </h2>
            </div>
        </div>
      <div className="relative group rounded overflow-hidden">
            <img src={pic2} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold">
                  <FaPlus />

                </h2>
            </div>
        </div>
      <div className="relative group rounded overflow-hidden">
            <img src={pic3} alt=""/>
            <div onClick={(e)=>{dis(e)}} id="image"
                className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center">
                <h2 className="text-white text-8xl font-bold">
                  <FaPlus />

                </h2>
            </div>
        </div>
      
    </section> 
      
    </div>
    <div id='lightBox' onClick={()=>{
      hidden()
    }} className='LightBox hidden  justify-center items-center top-0 bottom-0 start-0 end-0 fixed bg-[#ffffff77]'>
        <div onClick={(e)=>{e.stopPropagation()}} className=' flex justify-center items-center w-1/2 h-3/4 relative '>

<img src={pic} alt="" />
        </div>
      
    </div>
    </>

  )
}
