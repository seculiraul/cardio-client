import { Transition } from '@headlessui/react'
import { useState } from 'react'

const TimePicker = ({ dates, active, onTimePicked }) => {
  const [hour, setHour] = useState('Selectati ora')
  const [isOpen, setIsOpen] = useState(false)

  const onDropdownClick = (e) => {
    e.preventDefault()
    if (!active) return
    setIsOpen((prev) => !prev)
  }

  const onHourClick = (h) => {
    setHour(`Ora ${h}`)
    setIsOpen(false)
    onTimePicked(h)
  }
  return (
    <div>
      <button
        onClick={(e) => onDropdownClick(e)}
        className={`bg-pink-200 p-2 mb-2 w-full flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white active:text-black duration-300 
        ${
          active
            ? 'active:border-white active:text-black'
            : 'cursor-not-allowed opacity-70'
        }`}
      >
        {hour}
      </button>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="p-4 bg-pink-300 max-w-md md:max-w-lg lg:max-w-2xl rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 duration-300"
      >
        {dates.map((date, i) => (
          <span
            onClick={() => onHourClick(date)}
            key={i}
            className="font-bold mx-auto rounded-xl p-2 cursor-pointer hover:bg-pink-100 duration-300"
          >
            {date}
          </span>
        ))}
      </Transition>
    </div>
  )
}

export default TimePicker
