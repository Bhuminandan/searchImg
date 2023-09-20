import './App.css'
import axios from "axios"
import ImgGrid from './Components/ImgGrid'
import Search from './Components/Search'
import { useState } from 'react'

function App() {

  const[imgArr, setImgArr] = useState([])
  return (
    <div className='bg-slate-900 overflow-hidden'>
    <Search
    setImgArr={setImgArr}
    />
    <ImgGrid
    imgArr={imgArr}
    />
    </div>
  )
}

export default App
