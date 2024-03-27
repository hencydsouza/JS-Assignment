function sandwitchCalculator(bread) {
    return Math.floor(bread / 2)
}

function sandwitchCalculatorExtended(bread, cheese) {
    let sandwitches = Math.floor(bread / 2)

    return sandwitches > cheese ? cheese : sandwitches
}

console.log(sandwitchCalculator(5))
console.log(sandwitchCalculatorExtended(6,5))