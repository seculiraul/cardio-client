import { Transition } from '@headlessui/react'
import Calendar from './Calendar'
import { useState } from 'react'

const DatePicker = ({ active, onDateConfirmed }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dateSalected, setDateSelected] = useState('')

  const handleOnClick = (e) => {
    e.preventDefault()
    if (!active) return
    setIsOpen((prev) => !prev)
  }

  const onDatePicked = (val) => {
    setDateSelected(val)
    setIsOpen(false)
    onDateConfirmed(val)
  }
  return (
    <>
      <button
        onClick={(e) => handleOnClick(e)}
        className={`bg-pink-200 p-2 mb-2 w-full flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent  duration-300 
        ${
          active
            ? 'active:border-white active:text-black'
            : 'cursor-not-allowed opacity-70'
        }`}
      >
        {dateSalected || 'Selectati Data'}
      </button>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Calendar onDatePicked={onDatePicked} />
      </Transition>
    </>
  )
}

export default DatePicker
