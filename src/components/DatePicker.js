import { Transition } from '@headlessui/react'
import { useState } from 'react'

const DatePicker = ({ dates }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onDropdownClick = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <button
        onClick={(e) => onDropdownClick(e)}
        className="bg-pink-200 p-2 mb-2 w-full flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white active:text-black duration-300"
      >
        Selecteaza data
      </button>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-14 p-4 bg-pink-300 w-[300px] rounded-lg grid grid-cols-3 gap-2"
      >
        {dates.map((date, i) => (
          <span
            onClick
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

export default DatePicker
