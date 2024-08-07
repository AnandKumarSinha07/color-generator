import React, { useState } from 'react'
import './qrcode.css'
import QRCode from "react-qr-code"

function QrCode() {

  const [qrCode,setQrcode]=useState('');  
  const [input,setInput]=useState('');

  function handleGenerate (){
    setQrcode(input)
  }
  console.log("input",input)
  console.log("qrcode",qrCode);
  
  
  return (
    <div className='container' >
      <h1>Qr Code Generator</h1>
      <div className='input-section' >
          <input 
             onChange={(e)=>setInput(e.target.value)}
             type='text'
             name='qr-code'
             placeholder='Enter Your Value here'/>
          <button disabled={input && input.length===0 ?false:true} onClick={handleGenerate}>Generate</button>
      </div>

      <div>
         <QRCode 
            value={qrCode}
            size={300}
            bgColor='#fff'
         />
      </div>

    </div>
  )
}

export default QrCode