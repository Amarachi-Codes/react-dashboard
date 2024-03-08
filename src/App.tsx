import { HomePage, ProjectPage } from './pages';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'



function App() {
  

  return (
    <>
    <header className='header'>
      <Link to={'/'}>Home</Link>
      <Link to={'/project'}>Project</Link>
    </header>
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/project' element={<ProjectPage/>}/>
</Routes>
      
    </>
  )
}

export default App
