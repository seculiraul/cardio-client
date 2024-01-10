import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { useEffect, useState } from 'react'

const Calendar = () => {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [days, setDays] = useState([])
  const [month, setMonth] = useState(format(today, 'MMM-yyyy'))
  const [monthNr, setMonthNr] = useState(0)
  const firstDay = parse(month, 'MMM-yyyy', new Date())

  //   useEffect(() => {
  //     setSelectedDay(today)
  //   }, [])

  //   useEffect(() => {
  //     setMonth(monthNr ?? today.getMonth)
  //   }, [monthNr])

  //   useEffect(() => {
  //     setDays(getInterval(month))
  //     days.forEach((day) => {
  //       console.log(format(day, 'd'))
  //     })
  //   }, [month])

  const switchDays = (e, day) => {
    e.preventDefault()
    if (day < today || !isSameMonth(today, day)) {
      console.log('you cant press')
      return
    }
    setSelectedDay(day)
  }

  const getInterval = (month) =>
    eachDayOfInterval({
      start: startOfWeek(startOfMonth(month), { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(month), { weekStartsOn: 1 }),
    })

  const nextMonth = () => {
    console.log(firstDay)
    const next = add(firstDay, { months: 1 })
    setMonth(format(next, 'MMM-yyyy'))
  }

  const currentMonth = eachDayOfInterval({
    start: firstDay,
    end: endOfWeek(firstDay, { weekStartsOn: 1 }),
  })

  const changeMonth = (val) => {
    setMonthNr((prev) => prev + val)
  }
  return (
    <div className="p-4 px-6 bg-pink-200 rounded-xl">
      <div className="flex justify-between items-center my-2 p-2 w-full rounded-xl bg-pink-400 ">
        <ChevronLeftIcon
          onClick={() => changeMonth(-1)}
          className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer"
        />
        <h3 className="text-black">{format(firstDay, 'MMM yyyy')}</h3>
        <ChevronRightIcon
          onClick={() => nextMonth()}
          className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-7 mt-4 gap-8 mx-auto border-b border-pink-400">
        <h3 className="font-bold mx-auto px-2">L</h3>
        <h3 className="font-bold mx-auto px-2">M</h3>
        <h3 className="font-bold mx-auto px-2">M</h3>
        <h3 className="font-bold mx-auto px-2">J</h3>
        <h3 className="font-bold mx-auto px-2">V</h3>
        <h3 className="font-bold mx-auto px-2">S</h3>
        <h3 className="font-bold mx-auto px-2">D</h3>
      </div>
      <div className="grid grid-cols-7 mt-8 gap-x-8 gap-y-8">
        {currentMonth?.map((day, i) => (
          <button
            onClick={(e) => switchDays(e, day)}
            className={`text-black mx-auto px-2 rounded-full  duration-500 
            ${isEqual(selectedDay, day) ? 'bg-pink-400' : ''}
            ${
              month === day?.getMonth()
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
