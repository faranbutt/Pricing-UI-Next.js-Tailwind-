import React from 'react'
import Tick from '@/app/icons/Tick'
export default function Price() {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row mx-5 lg:mx-auto w-96 md:w-9/12 lg:w-9/12' style={{boxShadow:"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
        <div className='text-center pt-14 rounded-t-xl md:rounded-l-xl lg:rounded-l-xl pb-7 sm:lg-80 lg:h-96 w-96 lg:w-2/5' style={{background:'#F0EAFB'}}>
            <p className='text-black text-2xl pb-4' style={{fontFamily:"Inter",fontWeight:'bold'}}>Premium PRO</p>
            <p className='text-black text-5xl pb-2' style={{fontFamily:"Inter",fontWeight:'bold'}}>$329</p>
            <p className='text-black text-lg pb-6' style={{fontFamily:"Inter",fontWeight:'medium'}}>billed just once</p>
            <button className='text-white bg-purple-500 py-3.5 px-20 text-base rounded-lg' style={{fontFamily:"Inter",fontWeight:'lighter'}}>Get Started</button>
        </div>
        <div className='flex justify-center bg-white text-lg rounded-b-xl lg:rounded-r-xl w-96 lg:w-4/5'>
          <div className='pt-12 mx-3.5 mb-11' style={{fontFamily:"Inter",fontWeight:"normal"}}>
            <p className='pb-6'>Access these features when you get this pricing package for your business.</p>
            <ul>
              <li className='flex py-5 space-x-6'><Tick/><span>International calling and messaging API</span></li>
              <li className='flex space-x-6'><Tick/><span>Additional phone numbers</span></li>
              <li className='flex py-5 space-x-6'><Tick/><span>Automated messages via Zapier</span></li>
              <li className='flex space-x-6'><Tick/><span>24/7 support and consulting</span></li>
            </ul>
          </div>
        </div>
        <div>

        </div>
    </div>
  )
}
