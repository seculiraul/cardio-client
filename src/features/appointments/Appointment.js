import Calendar from '../../components/Calendar'
import DatePicker from '../../components/DatePicker'
import Dropdown from '../../components/Dropdown'

const Appointment = () => {
  const doctorList = [
    { title: 'doctor 1', value: 1 },
    { title: 'doctor2', value: 2 },
    { title: 'doctor3', value: 3 },
  ]

  const onItemPicked = (opt) => {
    console.log(opt)
  }
  const dates = ['14:00', '14:30', '15:00', '15:30', '16:00', '17:00']
  return (
    <div className="flex flex-col items-center justify-center">
      <label className="mx-auto p-2 text-pink-300 font-large">
        Efectureaza o programare
      </label>

      <form className="p-2 m-2">
        <div className="flex flex-col gap-2">
          <label className="text-pink-300 p-2">Selecteaza medicul</label>
          <Dropdown
            list={doctorList}
            onItemPicked={onItemPicked}
            defaultValue={'-- --'}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-pink-300 p-2">Selecteaza Data</label>
          <DatePicker dates={dates} />
        </div>
        <Calendar />
      </form>
    </div>
  )
}

export default Appointment
