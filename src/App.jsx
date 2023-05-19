import React, { useState } from 'react'
import './App.css'

function App() {
const [qrCode, setQrCode] = useState("")
const [qrImg, setQrImg] = useState("")
const qrCodeImg = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCode}`

 const gerQr = () => {
  
  setQrImg(qrCodeImg)
 }

  return (
    <>
    <h1> React QR Code Gen</h1>
    <input type='text' placeholder='type your text or link here' onChange={ (e) => {
      setQrCode(e.target.value)
    }}/>
    <button onClick={gerQr}>Generate QR</button>
    <img src={qrImg} alt="" />
    </>
  )
}

export default App
