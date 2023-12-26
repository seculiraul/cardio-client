import { Link } from 'react-router-dom'
import Input from '../components/Input'
import { useState } from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 duration-500">
      {error && (
        <div className="p-4  flex justify-center">
          <span className="text-red-600">
            Username or password are incorrect
          </span>
        </div>
      )}
      <div className="flex flex-col w-[500px] gap-2 p-4 m-2 bg-slate-700 border border-pink-200 rounded-xl shadow-lg shadow-pink-200">
        <div className="flex flex-col gap-2 font-small m-2 ">
          <label className="text-white"> Email</label>
          <Input
            value={username}
            onFocus={() => setError(false)}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="email"
            classes={error ? 'border-red-600' : ''}
          />
        </div>
        <div className="flex flex-col gap-2 font-small m-2">
          <label className="text-white"> Password</label>
          <Input
            classes={`text-pink-200 ${error ? 'border-red-600' : ''}`}
            onFocus={() => setError(false)}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PrimaryButton classes="my-4">Sign In</PrimaryButton>
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
