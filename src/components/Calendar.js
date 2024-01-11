import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { useState } from 'react'

const Calendar = () => {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [month, setMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCrtMonth = parse(month, 'MMM-yyyy', new Date())

  const switchDays = (e, day) => {
    e.preventDefault()
    if (day < today || !isSameMonth(firstDayCrtMonth, day)) {
      return
    }
    setSelectedDay(day)
  }

  const newDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCrtMonth), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCrtMonth), { weekStartsOn: 1 }),
  })

  const addToCrtMonth = (val) => {
    const next = add(firstDayCrtMonth, { months: val })
    setMonth(format(next, 'MMM-yyyy'))
    setSelectedDay(today)
  }

  const daysOfTheWeek = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D']

  return (
    <div className="p-4 px-6 bg-pink-200 rounded-xl">
      <div className="flex justify-between items-center my-2 p-2 w-full rounded-xl bg-pink-400 ">
        <ChevronLeftIcon
          onClick={() => addToCrtMonth(-1)}
          className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer"
        />
        <h3 className="text-black cursor-default select-none">
          {format(firstDayCrtMonth, 'MMM yyyy')}
        </h3>
        <ChevronRightIcon
          onClick={() => addToCrtMonth(1)}
          className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-7 mt-4 gap-8 mx-auto border-b border-pink-400">
        {daysOfTheWeek.map((dayOfWeek, index) => (
          <h3 key={index} className="font-bold mx-auto px-2 select-none">
            {dayOfWeek}
          </h3>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-8 gap-x-8 gap-y-8">
        {newDays?.map((day, i) => (
          <button
            onClick={(e) => switchDays(e, day)}
            className={`text-black mx-auto px-2 rounded-full  duration-500 select-none 
            ${isEqual(selectedDay, day) ? 'bg-pink-400' : ''}
            ${
              month === format(day, 'MMM-yyyy')
                ? day > today
                  ? 'text-black font-bold hover:bg-pink-300'
                  : 'text-black font-bold cursor-default'
                : 'text-zinc-700 cursor-default'
            }
            `}
            key={day?.toString()}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar
