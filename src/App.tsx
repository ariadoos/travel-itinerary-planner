import './App.css'
import Header from '@/components/layouts/header/Header'
import Landing from './components/layouts/landing/Landing'

function App() {

  return (
    <div className="flex flex-col flex-nowrap w-full h-full">
      <Header/>
      <Landing/>
    </div>
  )
}

export default App
