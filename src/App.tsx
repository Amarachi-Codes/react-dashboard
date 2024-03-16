 import { NotificationPage } from './pages';
import { Routes, Route, } from 'react-router-dom'
import './App.css'
import { AppRouteWrapper, HomeRouteWrapper } from './components';
import {AppHomePage,AppProjectPage,AppTaskPage,AppMembersPage,AppInvoicePage,AppCalenderPage,AppTimesheetPage,AppMessagesPage,AppSettingsPage} from './pages'

function App() {


  return (
    <>

      <Routes>

        <Route path='/' element={<HomeRouteWrapper />}>
          <Route path='/' element={<AppRouteWrapper  />} />
          <Route path='/notification' element={<NotificationPage />} />
          
        </Route>
        
        <Route path='/' element={<HomeRouteWrapper />}>
        <Route path='/app' element={<AppRouteWrapper />}>
          <Route index element={<AppHomePage />} />
          <Route path='project' element={<AppProjectPage />} />
          <Route path='task' element={<AppTaskPage />} />
          <Route path='members' element={<AppMembersPage/>} />
          <Route path='invoice' element={<AppInvoicePage />} />
          <Route path='calender' element={<AppCalenderPage />} />
          <Route path='timesheet' element={<AppTimesheetPage />} />
          <Route path='messages' element={<AppMessagesPage />} />
          <Route path='settings' element={<AppSettingsPage />} />
        </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
