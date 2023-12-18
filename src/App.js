import { Routes, Route } from 'react-router-dom'
import SignIn from './features/SignIn'
const App = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
