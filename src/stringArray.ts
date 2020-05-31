export default (key: string, separator: string = ',') => {
  const rawValue = process.env[key]

  if (!rawValue) {
    return undefined
  }

  return rawValue.split(separator)
}
