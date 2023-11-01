export const validateDate = (startDate: Date) => {
  const isPosterior = new Date().getTime() < new Date(startDate).getTime()
  return isPosterior
}

export const validateEndDate = (startDate: Date, endDate: Date) => {
  const isPosterior = new Date(startDate).getTime() <= new Date(endDate).getTime()
  return isPosterior
}

export const validateDeadline = (startDate: Date, deadline: Date) => {
  const isPosterior = new Date().getTime() <= new Date(deadline).getTime()
  const isBeforeStart = new Date(startDate).getTime() >= new Date(deadline).getTime()
  return (isPosterior && isBeforeStart)
}
