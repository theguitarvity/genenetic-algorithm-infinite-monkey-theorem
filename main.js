const Population = require("./src/class/population")

const generate = (populationSize, target, mutationRate, generations) => {
    if(!target){
        return {membersKey:0, membersFound: 0}
    }
    const population = new Population(populationSize, target, mutationRate)

    population.envolve(generations)

    const membersKey = population.members.map((member) => member.keys.join(''))
    const perfectCadidatesNum = membersKey.filter((member) => member === target)

    const membersFound = perfectCadidatesNum ? perfectCadidatesNum.length: 0 
    console.log(membersKey)
    console.log(`${membersFound} member(s) "${target}"`)

    return membersFound

}
const target = process.argv[2]

let generation = generate(20, target, 0.05, 5)
let generationsNumber = 1
while(generation == 0){   
    generation = generate(20, target, 0.05, 5)
    generationsNumber++
}

console.log(`after ${generationsNumber} generations`)

