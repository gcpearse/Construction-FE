export const formatJobsData = (count: number): string => {

  if (count === 0) return "are no jobs"

  if (count === 1) return "is 1 job"

  return `are ${count} jobs`
}


export const formatHeader = (header: string): string => {

  const words = header.split(" ")
  const formattedWords: string[] = []

  for (const word of words) {
    formattedWords.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
  }

  return formattedWords.join(" ")
}


export const lengthenDate = (date: string): string => {

  const day = date.split("-")[2].slice(0, 2)
  const month = date.split("-")[1]
  const year = date.split("-")[0]

  const reformattedDate = new Date(`${month}/${day}/${year}`).toDateString().split(" ")
  const numDay = Number(reformattedDate[2])
  const lengthenedDate = []

  type Days = {
    "Mon": string
    "Tue": string
    "Wed": string
    "Thu": string
    "Fri": string
    "Sat": string
    "Sun": string
  }

  type Months = {
    "Jan": string
    "Feb": string
    "Mar": string
    "Apr": string
    "May": string
    "Jun": string
    "Jul": string
    "Aug": string
    "Sep": string
    "Oct": string
    "Nov": string
    "Dec": string
  }

  const days: Days = {
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday",
    "Sun": "Sunday",
  }

  const months: Months = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
  }

  for (let day in days) {
    if (reformattedDate[0] === day) {
      lengthenedDate.push(days[day as keyof Days])
    }
  }

  if (numDay === 1 || numDay === 21 || numDay === 31) {
    lengthenedDate.push(`${numDay}st`)

  } else if (numDay === 2 || numDay === 22) {
    lengthenedDate.push(`${numDay}nd`)

  } else if (numDay === 3 || numDay === 23) {
    lengthenedDate.push(`${numDay}rd`)

  } else {
    lengthenedDate.push(`${numDay}th`)
  }

  for (let month in months) {
    if (reformattedDate[1] === month) {
      lengthenedDate.push(months[month as keyof Months])
    }
  }

  lengthenedDate.push(year)

  return lengthenedDate.join(" ")
}
