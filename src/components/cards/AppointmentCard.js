const AppointmentCard = ({ details }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-2 m-2 rounded-xl bg-pink-200 hover:bg-pink-300 duration-300 cursor-pointer">
      <label className="cursor-pointer font-bold">{details?.date}</label>
      <label className="cursor-pointer font-bold">{details?.doctor}</label>
    </div>
  )
}

export default AppointmentCard
