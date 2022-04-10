import { Model } from "../Models/Model"

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  eventsMap(): { [key: string]: () => void } {
    return {}
  }

  regionsMap(): { [key: string]: string } {
    return {}
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render()
    })
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":")

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  onRender(): void {}

  mapRegions(fragment: DocumentFragment): void {
    const regionMap = this.regionsMap()

    for (let key in regionMap) {
      const selector = regionMap[key]
      const element = fragment.querySelector(selector)
      if (element) this.regions[key] = element
    }
  }

  render(): void {
    this.parent.innerHTML = ""

    const templateElement = document.createElement("template")
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.onRender()

    this.parent.append(templateElement.content)
  }
}
