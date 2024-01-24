import { useState } from 'react'
import DatePicker from '../../components/DatePicker'
import Dropdown from '../../components/Dropdown'
import TimePicker from '../../components/TimePicker'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Transition } from '@headlessui/react'

const Appointment = () => {
  const [step, setStep] = useState(0)
  const [details, setDetails] = useState({ doctor: '', date: '', time: '' })
  const [isOpen, setIsOpen] = useState(false)

  const doctorList = [
    { title: 'doctor 1', value: 1 },
    { title: 'doctor2', value: 2 },
    { title: 'doctor3', value: 3 },
  ]

  const onItemPicked = (opt) => {
    console.log(opt)
    setDetails((prev) => ({
      ...prev,
      doctor: opt,
    }))
    setStep(1)
  }

  const onDateConfirmed = (date) => {
    console.log(date)
    setDetails((prev) => ({
      ...prev,
      date,
    }))
    setStep(2)
  }

  const onTimedConfirmed = (time) => {
    console.log(time)
    setDetails((prev) => ({
      ...prev,
      time,
    }))
    setStep(3)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (step < 3) return
    setIsOpen(true)
    console.log(details)
  }

  const dates = ['14:00', '14:30', '15:00', '15:30', '16:00', '17:00']
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl duration-500">
      <label className="mx-auto p-2 text-pink-300 font-large">
        Efectureaza o programare
      </label>

      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        sta
      >
        <p className="w-full p-4 m-2 bg-pink-200 text-black rounded-lg">
          Programare efectuata cu success
        </p>
      </Transition>

      <form className="w-full flex flex-col gap-4 p-4 m-2 border border-pink-200 rounded-xl md:p-6 lg:p-8 duration-500">
        <div className="flex flex-col gap-2">
          <label className="text-pink-300 text-xl p-2">
            1. Selecteaza Medicul
          </label>
          <Dropdown
            list={doctorList}
            onItemPicked={onItemPicked}
            defaultValue={'-- --'}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-pink-300 text-xl p-2">
            2. Selecteaza Data
          </label>
          <DatePicker active={step > 0} onDateConfirmed={onDateConfirmed} />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-pink-300 text-xl p-2">3. Selecteaza Ora</label>
          <TimePicker
            dates={dates}
            active={step > 1}
            onTimePicked={onTimedConfirmed}
          />
        </div>
        <div className="flex justify-end my-2 p-2">
          <PrimaryButton
            onClick={(e) => onSubmit(e)}
            classes={
              step > 2 ? 'hover:bg-pink-300' : 'cursor-not-allowed opacity-70'
            }
          >
            Efectueaza Programarea
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default Appointment
