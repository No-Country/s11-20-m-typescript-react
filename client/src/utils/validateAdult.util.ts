export const validateAdult = (birthday: Date) => {
  const isAdult =
    (new Date().getTime() - new Date(birthday).getTime()) /
      (365 * 24 * 60 * 60 * 1000) >=
    18

  return isAdult
}
