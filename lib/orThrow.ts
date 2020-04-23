type ReadFunction<T> = (key: string) => T | undefined

export default <T>(readFunction: ReadFunction<T>) => (key: string) => {
  const value = readFunction(key)

  if (!value) {
    throw new Error(`process.env.${key} is not defined`)
  }

  return value
}
