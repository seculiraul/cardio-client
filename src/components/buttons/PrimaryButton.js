const PrimaryButton = ({ classes, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`p-2 bg-pink-200 rounded-xl shadow-md hover:bg-pink-300 duration-300 ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
