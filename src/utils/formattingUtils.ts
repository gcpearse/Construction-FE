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
