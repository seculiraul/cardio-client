import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <div className="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-[500px] gap-2 p-4 m-2 border-2 border-pink-500 rounded-xl">
        <div className="flex flex-col gap-2 font-small mx-2">
          <label className="text-white"> Username</label>
          <input
            id="username"
            type="email"
            className="p-2 border border-gray-200 hover:border-gray-300 hover:bg-zinc-200 focus:bg-zinc-300 focus:border-gray-300 active:border-gray-300 peer-valid:border-gray-300 duration-300"
          />
        </div>
        <div className="flex flex-col gap-2 font-small mx-2">
          <label className="text-white"> Password</label>
          <input
            id="password"
            type="password"
            className="p-2 text-white rounded-xl bg-slate-700 border border-pink-600 focus:border-pink-700 focus:outline-none focus:shadow-outline duration-800"
          />
        </div>
        <button className="p-2 my-4 bg-pink-200">Sign In</button>
        <div className="flex flex-col mx-auto mt-2 items-center">
          <span className="mb-4">or</span>
          <Link to={'/signUp'}>Register now</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
