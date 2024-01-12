import { useState } from 'react'
import DatePicker from '../../components/DatePicker'
import Dropdown from '../../components/Dropdown'
import TimePicker from '../../components/TimePicker'

const Appointment = () => {
  const [step, setStep] = useState(0)
  const doctorList = [
    { title: 'doctor 1', value: 1 },
    { title: 'doctor2', value: 2 },
    { title: 'doctor3', value: 3 },
  ]

  const onItemPicked = (opt) => {
    console.log(opt)
    setStep(1)
  }

  const onDateConfirmed = (date) => {
    console.log(date)
    setStep(2)
  }

  const onTimedConfirmed = (time) => {
    console.log(time)
  }

  const dates = ['14:00', '14:30', '15:00', '15:30', '16:00', '17:00']
  return (
    <div className="flex flex-col items-center justify-center">
      <label className="mx-auto p-2 text-pink-300 font-large">
        Efectureaza o programare
      </label>

      <form className="p-2 m-2">
        <div className="flex flex-col gap-2">
          <label className="text-pink-300 text-xl p-2">Medicul</label>
          <Dropdown
            list={doctorList}
            onItemPicked={onItemPicked}
            defaultValue={'-- --'}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-pink-300 text-xl p-2">Data</label>
          <DatePicker active={step > 0} onDateConfirmed={onDateConfirmed} />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-pink-300 text-xl p-2">Ora</label>
          <TimePicker
            dates={dates}
            active={step > 1}
            onTimePicked={onTimedConfirmed}
          />
        </div>
      </form>
    </div>
  )
}

export default Appointment
