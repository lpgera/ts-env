export default (key: string) => {
  switch (process.env[key]) {
    case 'true':
    case '1':
      return true
    case 'false':
    case '0':
      return false
    default:
      return undefined
  }
}
