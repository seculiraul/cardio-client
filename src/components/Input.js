const Input = ({ classes, ...rest }) => {
  return (
    <input
      {...rest}
      className={`p-2 text-white rounded-xl bg-slate-800 border border-pink-200 focus:bg-slate-700  focus:border-pink-300 focus:outline-none focus:shadow-outline duration-300 ${classes}`}
    />
  )
}

export default Input
