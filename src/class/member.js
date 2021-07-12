const { generateLetter, random } = require("../util/utils")

module.exports = class Member {
    constructor(target) {
        this.target = target
        this.keys = []

        for(let i = 0; i < target.length; i ++){
            this.keys[i] = generateLetter()
        }
    }
    
    fitness() {
        let match = 0
        for (let index = 0; index < this.keys.length; index++) {
            if(this.keys[index] === this.target[index]){
                match += 1
            }            
        }

        return match / this.target.length
    }

    crossover(partner) {
        const targetLength = this.target.length
        const child = new Member(this.target)
        const midpoint = random(0, targetLength)

        for(let index = 0; index < targetLength; index++){
            if(index > midpoint){
                child.keys[index] = this.keys[index]
                continue
            }
            child.keys[index] = partner.keys[index]
        }

        return child

    }

    mutate(mutationRate) {
        const keysLength = this.keys.length 
        for(let index = 0; index < keysLength; index++){
            if(Math.random() < mutationRate){
                this.keys[index] = generateLetter()
            }
        }
    }

}