import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJobs from './pages/ApplyJobs'
import Applications from './pages/Applications'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/apply_job/:id' element={<ApplyJobs/>}/>
          <Route path='/applications/' element={<Applications/>}/> 
        </Routes>
    </div>
  )
}

export default App
