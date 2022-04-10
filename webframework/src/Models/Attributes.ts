export class Attributes<T> {
  // Store information about a User
  constructor(private data: T) {}

  // Get a piece of information about this user
  get = <K extends keyof T>(propsName: K): T[K] => {
    return this.data[propsName]
  }

  // Changes information about this user
  set(update: T): void {
    Object.assign(this.data, update)
  }

  getAll = (): T => {
    return this.data
  }
}
