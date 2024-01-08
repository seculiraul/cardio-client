import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'

const Calendar = () => {
  const days = (() => {
    let day = 1
    const res = []
    while (day <= 31) {
      res.push(day)
      day++
    }
    return res
  })()

  const today = startOfToday()
  const days2 = eachDayOfInterval({
    start: startOfWeek(startOfMonth(today), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(today), { weekStartsOn: 1 }),
  })
  return (
    <div className="p-4 px-6 bg-pink-200 rounded-xl">
      <div className="flex justify-between items-center my-2 p-2 w-full rounded-xl bg-pink-400 ">
        <ChevronLeftIcon className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer" />
        <h3 className="text-black">{format(today, 'MMM yyyy')}</h3>
        <ChevronRightIcon className="text-black w-6 h-6 rounded-full hover:bg-pink-200 duration-500 cursor-pointer" />
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
        {days2.map((day, i) => (
          <button
            className={`text-black mx-auto px-2 rounded-full hover:bg-pink-300 duration-500 
            ${isToday(day) ? 'bg-pink-400' : ''}
            ${
              isSameMonth(today, day) ? 'text-black font-bold' : 'text-zinc-700'
            }
            `}
            key={day.toString()}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar
