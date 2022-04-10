import { User, UserProps } from "../Models/User"
import { View } from "./View"

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector("input")

    if (input) {
      const name = input.value
      this.model.set({ name })
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>  
    `
  }

  render(): void {
    this.parent.innerHTML = ""

    const templateElement = document.createElement("template")
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content)
  }
}
