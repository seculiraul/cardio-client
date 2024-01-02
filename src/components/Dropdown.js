import { Transition } from '@headlessui/react'
import { useState } from 'react'

const Dropdown = ({ list, extraClasses, onItemPicked, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')

  const onDropdownClick = (e) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const onClickOnOption = (title, value) => {
    setTitle(title)
    onItemPicked(value)
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col items-center w-[200px] rounded-lg">
      <button
        onClick={(e) => onDropdownClick(e)}
        className="bg-pink-200 p-2 w-full flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white active:text-black duration-300"
      >
        {title || defaultValue}
      </button>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="bg-pink-300 mt-2 flex flex-col items-start rounded-lg p-2 w-full"
      >
        {list.map(({ title, value }, index) => (
          <div
            key={index}
            onClick={() => onClickOnOption(title, value)}
            className="flex w-full justify-between p-2 hover:bg-pink-200 cursor-pointer rounded-lg border-l-transparent duration-300"
          >
            <h3>{title}</h3>
          </div>
        ))}
      </Transition>
    </div>
  )
}

export default Dropdown
