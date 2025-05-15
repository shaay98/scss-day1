import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <h1 className='section-one'>Sass Demo</h1>
     <p className='section-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus. Numquam obcaecati dignissimos in autem! Sunt sint magni officia aut, qui error ratione distinctio illum tempora minus eaque porro corrupti?</p>
     <footer className='section-three'>Copyright &copy; 2025 Nijah Richardson</footer>
    </>
  )
}

export default App
