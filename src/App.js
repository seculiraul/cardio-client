import { Routes, Route } from 'react-router-dom'
import SignIn from './features/SignIn'
import SignUp from './features/SignUp'
import Navbar from './components/Navbar'
import Appointment from './features/appointments/Appointment'
const App = () => {
  return (
    <div className="bg-slate-900 h-[300vh]">
      <Navbar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/programare" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
