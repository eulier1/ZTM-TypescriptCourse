import { UserEdit } from "./Views/UserEdit"
import { User } from "./Models/User"

const user = User.buildUser({ id: 3, name: "Eulier", age: 31 })

const root = document.getElementById("root")

if (root) {
  const userEdit = new UserEdit(root, user)

  userEdit.render()

  console.log(userEdit)
} else {
  throw new Error("Root element not found")
}
