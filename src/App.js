import { Routes, Route } from 'react-router-dom'
import SignIn from './features/SignIn'
import SignUp from './features/SignUp'
import Navbar from './components/Navbar'
import Appointment from './features/appointments/Appointment'
import MyAppointments from './features/appointments/view-appointments/MyAppointments'
const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/programare" element={<Appointment />} />
        <Route path="/cont" element={<MyAppointments />} />
      </Routes>
    </div>
  )
}

export default App
