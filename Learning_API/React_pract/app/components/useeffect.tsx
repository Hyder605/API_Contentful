'use client'
import React, { useEffect, useState } from 'react'

function Useeffect(){
    const [count, setCount]=useState(0)
    // whenever the onclick button pressed the components will re rendered and on every render firstly
    //  useEffect fucntion will call
    //1.no dependency passed like below=useEfect fun runs on every render
    //2.On empty array= useEffect(()=>{function},[])==> runs on first render only(in case of Api calling one time only)
    //3.Props or State Value= useEffect(()=>{function},[prop,state])=runs on first render only and if props/state value changed then only run useEffect
    //useEffect(()=>{function},[count])===>will call only when count value will chang,by default it runs on 1st render only
    
    useEffect(()=>{
        document.title=count.toString();
    })
    
    return (
    <section className='flex mt-10 font-bold justify-center items-center '>
        <div className=' w-52 text-center font-bold text-2xl'>
            <button onClick={()=>(count===0? setCount(0):setCount(count-1))} className='border-1 bg-red-200 w-9 rounded-full'>-</button>
            {" "}{count}{" "}
            <button onClick={()=>setCount(count+1)} className='border-1 bg-red-200 w-9 rounded-full'>+</button>

        </div>
    </section>
  )
}

export default Useeffect