import React from 'react'
import moment from 'moment'

const Clock = () => {
  const time = moment().format('LT')
  const currentHour = moment().format('HH')
  let timeofday = ''

  if (currentHour < 12) {
    timeofday = 'morning'
  } else if (currentHour < 18 && currentHour >= 12) {
    timeofday = 'afternoon'
  } else {
    timeofday = 'evening'
  }

  return (
    <div>
      <h1 id="time">
        {time}
      </h1>
      <p id="timeofday">
        Good {timeofday}!
      </p>
    </div>
  )
}

export default Clock
