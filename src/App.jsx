import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import Button from "./components/Button"
import './App.css'
import './index.css'

export default function App() {
  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='flex'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <Link 
        to="/sobre" 
      >
        <Button text={"Sobre"} />
      </Link>
    </div>
  )
}
