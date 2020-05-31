export default (key: string, separator: string = ',') => {
  const rawValue = process.env[key]

  if (!rawValue) {
    return undefined
  }

  const numberArray = rawValue.split(separator).map((s) => Number(s))

  if (numberArray.some((n) => isNaN(n))) {
    return undefined
  }

  return numberArray
}
