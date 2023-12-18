import { Link } from 'react-router-dom'
import Input from '../components/Input'
import { useEffect, useState } from 'react'
const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-[500px] gap-2 p-4 m-2 bg-slate-700 border border-pink-200 rounded-xl shadow-lg shadow-pink-200">
        <div className="flex flex-col gap-2 font-small m-2 ">
          <label className="text-white"> Username</label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2 font-small m-2">
          <label className="text-white"> Password</label>
          <Input
            classes={'text-pink-200'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="p-2 my-4 bg-pink-200 rounded-xl shadow-md hover:bg-pink-300 duration-300">
          Sign In
        </button>
        <div className="flex flex-col mx-auto mt-2 items-center">
          <span className="mb-4 text-white">or</span>
          <Link
            className="text-pink-200 hover:text-pink-300 duration-300"
            to={'/signUp'}
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
