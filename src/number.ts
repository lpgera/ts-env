export default (key: string) => {
  const number = Number(process.env[key])

  if (isNaN(number)) {
    return undefined
  }

  return number
}
