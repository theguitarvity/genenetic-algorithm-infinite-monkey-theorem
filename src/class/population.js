const { random } = require("../util/utils")
const Member = require("./member")

module.exports = class Population {
    constructor(size, target, mutationRate) {
        size = size || 1
        this.members = []
        this.mutationRate = mutationRate

        for (let index = 0; index < size; index++) {
            this.members.push(new Member(target))            
        }
    }

    selectMemberForMating() {
        const matingPool = []

        this.members.forEach((member) => {
            const fitness = Math.floor(member.fitness() * 100) || 1

            for(let index = 0; index < fitness; index ++){
                matingPool.push(member)
            }
        })

        return matingPool
    }

    reproduce(matingPool) {
        for (let index = 0; index < this.members.length; index++) {
            this.mutate(index, matingPool)            
        }
    }

    mutate(index, matingPool){
        const matingPoolLengh = matingPool.length
        const parentA = matingPool[random(0, matingPoolLengh)]
        const parentB = matingPool[random(0, matingPoolLengh)]

        const child = parentA.crossover(parentB)

        child.mutate(this.mutationRate)

        this.members[index] = child
    }

    envolve(generations) {
        for(let index = 0; index < generations; index ++){
            const pool = this.selectMemberForMating()

            this.reproduce(pool)
        }
    }
}