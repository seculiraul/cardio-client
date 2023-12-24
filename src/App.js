import { Routes, Route } from 'react-router-dom'
import SignIn from './features/SignIn'
import SignUp from './features/SignUp'
const App = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
