type ReadFunction<T> = (key: string) => T | undefined

export default <T>(readFunction: ReadFunction<T>, type: string) => {
  return (key: string) => {
    const value = readFunction(key)

    if (!value) {
      throw new Error(`Couldn't read ${type} value from process.env.${key}`)
    }

    return value
  }
}
