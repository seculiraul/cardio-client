import AppointmentCard from '../../../components/cards/AppointmentCard'

const MyAppointments = () => {
  const x = [1, 2, 3, 4, 5, 6]
  const details = { date: '20/01/2021', doctor: 'Dr Test' }
  return (
    <div className="flex flex-col mx-auto my-2 p-4 max-w-md md:max-w-lg lg-max-w-xl xl:max-w-7xl border border-pink-200">
      <span className="mt-14 mb-6 text-pink-300 text-4xl">
        Programarile mele
      </span>
      <div className="grid grid-cols-4 p-2 m-2">
        {x.map((el) => (
          <AppointmentCard key={el.toString()} details={details} />
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
