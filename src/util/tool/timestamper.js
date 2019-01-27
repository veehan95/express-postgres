export default class TimeStamper {
  static now() { return Date.now() }

  static attach(str, option) {
    switch (option.position) {
      case 'pre':
        return `${this.now()}${option.seperator || ''}${str}`
      case 'post':
        return `${str}${option.seperator || ''}${this.now()}`
      default:
        throw new Error('Invalid time stamp option')
    }
  }
}
