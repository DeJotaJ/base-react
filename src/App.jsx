import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className='w-full flex justify-center gap-6'>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />

      <Link 
        to="/sobre" 
        className="text-blue-500 hover:underline"
      >
        SOBRE
      </Link>
    </div>
  )
}
