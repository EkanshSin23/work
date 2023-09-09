import React from 'react'
import "../../index.css"
const Events = () => {
  return (
    <div className="events-container ">
        <div className="events-top">
        <h1 className='pl-5'>Events</h1>
        </div>
        <div className="events-bottom w-full h-full flex   ">
            <div className="events-bottom-left  mr-5 ">


            <div class="w-full grid grid-cols-3 ">
  <div class="flex items-center justify-center gallery-card ">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center  gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <div class="flex items-center justify-center gallery-card">01</div>
  <button className='open-gallery p-2 rounded'>Open Gallery</button>
 
</div>
            </div>
            <div className="events-bottom-right flex flex-col items-center justify-center mr-5">
                <div >
<h1 className='text-start text-bold'>Whats Happening Today?</h1>
<p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam impedit </p>
</div>
<div>
<h1 className='mt-5'>Who might be interested?</h1>
<p className='text-start ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam impedit </p>
</div>
            </div>
        </div>
    </div>
  )
}

export default Events