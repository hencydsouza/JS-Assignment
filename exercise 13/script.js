function persistence(num) {
    let count = 0

    while (num > 9) {
        let temp = num
        let newNum = 1

        while (temp != 0) {
            let rem = temp % 10
            temp = Math.floor(temp / 10)
            newNum = newNum * rem
        }
        num = newNum
        count++
    }
    return count
}

console.log(persistence(39))