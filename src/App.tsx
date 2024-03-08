import { HomePage, ProjectPage } from './pages';
import { Routes, Route, } from 'react-router-dom'
import './App.css'
import { AppRouteWrapper, HomeRouteWrapper } from './components';



function App() {


  return (
    <>

      <Routes>

        <Route path='/' element={<HomeRouteWrapper />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/project' element={<ProjectPage />} />
        </Route>
        <Route path='/app' element={<AppRouteWrapper/>}>

        </Route>

      </Routes>

    </>
  )
}

export default App
