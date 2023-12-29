import { useState } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  const sidebarItems = [
    {
      title: 'Acasa',
      path: '/home',
      icon: '',
      cName: 'flex items-center justify-start p-4',
    },
    {
      title: 'Programare',
      path: '/programare',
      icon: '',
      cName: 'flex items-center justify-start p-4',
    },
    {
      title: 'Autentificare',
      path: '/signin',
      icon: '',
      cName: 'flex items-center justify-start p-4',
    },
  ]
  return (
    <div className="relative">
      <div className="bg-slate-800 h-14 flex justify-start items-center">
        <Link className="p-4">
          <Bars3Icon onClick={showSidebar} className="text-pink-300 h-8 w-8" />
        </Link>
      </div>
      <Transition
        show={sidebar}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav className="bg-slate-800 w-[300px] h-full flex flex-col items-start fixed inset-y-0 left-0">
          <div className="flex w-full justify-end p-4 m-2">
            <XMarkIcon
              onClick={showSidebar}
              className="h-8 w-8 text-pink-300 cursor-pointer"
            />
          </div>
          <ul className="flex flex-col items-start ml-12 p-6">
            {sidebarItems.map((item, i) => {
              return (
                <li key={i} className="text-pink-300 my-2 p-2">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Transition>
    </div>
  )
}

export default Navbar
