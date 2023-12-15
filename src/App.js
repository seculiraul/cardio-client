import { Routes, Route } from 'react-router-dom'
import SignIn from './features/SignIn'
const App = () => {
  return (
    <div className="bg-slate-800 h-screen">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
