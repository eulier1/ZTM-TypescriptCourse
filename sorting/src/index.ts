import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharacterCollection } from "./CaracterCollections"

// const numberCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(sorter)

const charCollection = new CharacterCollection("Xaayb")
charCollection.sort()

// const numberCollection = new NumbersCollection([10, 3, -5, 0])

console.log(charCollection.data)
