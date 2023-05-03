const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);



//an array of pokémon objects where the id is evenly divisible by 3
const divById = pokémon.filter((by3)=>{
  return by3.id % 3 === 0
})
console.log(divById)
//an array of pokémon objects that are "fire" type
const fireType = pokémon.filter((fire)=>{
  return fire.types == "fire"
})
console.log(fireType)
//an array of pokémon objects that have more than one type
const moreTypes = pokémon.filter((element)=>{
  return element.types.length>=2
})
console.log(moreTypes)
//an array with just the names of the pokémon
const onlyNames = pokémon.map((element)=>element.name)
console.log(onlyNames)
// an array with just the names of pokémon with an id greater than 99
const greaterThan = pokémon.filter((moreThan)=>{
  return moreThan.id > 99
})
console.log(greaterThan)
//an array with just the names of the pokémon whose only type is poison
const poisonType = pokémon.filter((poison)=>{
  return poison.types == "poison"
})
console.log(poisonType)
//an array containing just the first type of all the pokémon whose second type is "flying"
const secondFly = pokémon.filter((fly2)=>{
  return fly2.types[1] == "flying"
})
console.log(secondFly)
//a count of the number of pokémon that are "normal" type
let count = 0
const numberNormal = pokémon.map((normalPok)=>{
  if(normalPok.types=="normal"){
    count++
  }
  return count
})
console.log(count)