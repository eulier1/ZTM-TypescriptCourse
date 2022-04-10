"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CaracterCollections_1 = require("./CaracterCollections");
// const numberCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(sorter)
var charCollection = new CaracterCollections_1.CharacterCollection("Xaayb");
charCollection.sort();
// const numberCollection = new NumbersCollection([10, 3, -5, 0])
console.log(charCollection.data);
