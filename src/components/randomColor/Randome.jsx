import React, { useEffect, useState } from 'react'
import "./randome.css"


function Randome() {

    const [type,setType]=useState("rgb")
    const [color,setColor]=useState("#000000")  
 
  
 
  function utility(length){
      return Math.floor(Math.random()*length)
  } 

  function randomeHexColor(){
   
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor='#';

    for(let i=0;i<6;i++){
          hexColor+=hex[utility(hex.length)]
    }
     console.log(hexColor)
     setColor(hexColor)
  }

  function randomRgbColor() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
    
  }
console.log("outiside useEffect")
useEffect(()=>{
    if(type==='hex'){
        randomeHexColor()
      }
      else{
        randomRgbColor()
      }
      console.log(type)
      console.log("inside useEffect")
  },[type])  

  
  return (
    <div style={{background:color,width:'100vw',height:'100vh'}}>   
       <div>
           <button onClick={()=>setType('hex')}>Generate Hex Color</button>
           <button onClick={()=>setType('rgb')}>Generate Rgb Color</button>
           <button onClick={type==='hex'?randomeHexColor:randomRgbColor}>Generate Random Color</button>
       </div>
       
       <div className='color-box'>
          {type }
          {color}
       </div>
    </div>
  )
}

export default Randome