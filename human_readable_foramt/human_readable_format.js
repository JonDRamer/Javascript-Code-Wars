function formatDuration(secs) {
  if (!secs) {
    return 'now'
  }

  const yearInfo = getYears(secs) || null
  const years = yearInfo ? yearInfo.years : null
  secs = yearInfo ? yearInfo.remainingSeconds : secs

  const dayInfo = getDays(secs) || null
  const days = dayInfo ? dayInfo.days : null
  secs = dayInfo ? dayInfo.remainingSeconds : secs

  const hourInfo = getHours(secs) || null
  const hours = hourInfo ? hourInfo.hours : null
  secs = hourInfo ? hourInfo.remainingSeconds : secs

  const minuteInfo = getMinutes(secs) || null
  const minutes = minuteInfo ? minuteInfo.minutes : null
  secs = minuteInfo ? minuteInfo.remainingSeconds : secs


  const secondsInfo = getSeconds(secs) || null
  const seconds = secondsInfo ? secondsInfo.seconds : null
  secs = secondsInfo ? secondsInfo.remainingSeconds : secs

  const formattedStringArray = getFormattedTime(years, days, hours, minutes, seconds )

  return formattedStringArray.join('')
}

function getYears(secs) {
  const secondsInYear = 31536000
  const years = secs / secondsInYear >= 1 ? Math.floor(secs / secondsInYear) : 0
  if (years >= 1) {
    secs -= years * secondsInYear
  }
  return { years, remainingSeconds: secs }
}

function getDays(secs) {
  const secondsInDay = 86400
  const days = secs / secondsInDay >= 1 ? Math.floor(secs / secondsInDay) : 0
  if (days >= 1) {
    secs -= days * secondsInDay
  }
  return { days, remainingSeconds: secs }
}

function getHours(secs) {
  const secondsInHour = 3600
  const hours = secs / secondsInHour >= 1 ? Math.floor(secs / secondsInHour) : 0
  if (hours >= 1) {
    secs -= hours * secondsInHour
  }
  return { hours, remainingSeconds: secs }
}

function getMinutes(secs) {
  const secondsInMinute = 60
  const minutes = secs / secondsInMinute >= 1 ? Math.floor(secs / secondsInMinute) : 0
  if (minutes >= 1) {
    secs -= minutes * secondsInMinute
  }
  return { minutes, remainingSeconds: secs }
}

function getSeconds(secs) {
  const seconds = secs
  if (secs >= 1) {
    secs -= secs
  }
  return { seconds, remainingSeconds: secs }
}

function getFormattedTime(years, days, hours, minutes, seconds) {
  const initialTimeArray = [{ time: 'years', value: years }, { time: 'days', value: days }, { time: 'hours', value: hours }, { time: 'minutes', value: minutes }, { time: 'seconds', value: seconds }]
  const filteredTimeArray = initialTimeArray.filter((e) => e.value > 0)
  let formattedStringArray = []
  filteredTimeArray.forEach((item, index) => {
    const pluralizedItem = item.value > 1 ? item.value.toString().concat(` ${item.time}`) : ''
    const singularItem = item.value === 1 ? item.value.toString().concat(` ${item.time.substring(0, item.time.length - 1)}`) : ''
    if (pluralizedItem) {
      if (index < filteredTimeArray.length - 1) {
        formattedStringArray.push(pluralizedItem.concat(', '))
      } else {
        if (formattedStringArray.length) {
          formattedStringArray[index - 1] = formattedStringArray[index - 1].split(',').join('')
          formattedStringArray.push(`and ${pluralizedItem}`)
        } else {
          formattedStringArray.push(pluralizedItem)
        }
      }
    } else if (singularItem) {
      if (index < filteredTimeArray.length - 1) {
        formattedStringArray.push(singularItem.concat(', '))
      } else {
        if (formattedStringArray.length) {
          formattedStringArray[index - 1] = formattedStringArray[index - 1].split(',').join('')
          formattedStringArray.push(`and ${singularItem}`)
        } else {
          formattedStringArray.push(singularItem)
        }
      }
    }
  })
  return formattedStringArray
}

// formatDuration(0) // "now"
// formatDuration(1) // "1 second");
formatDuration(62) // "1 minute and 2 seconds");
// formatDuration(120) // "2 minutes");
// formatDuration(3600) // "1 hour");
// formatDuration(3662) // "1 hour, 1 minute and 2 seconds");
// formatDuration(9069626041)
