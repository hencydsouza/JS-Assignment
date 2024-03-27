let string = "The quick brown fox"

let array = string.split(' ').map((ele) => {
    ele = ele.toLowerCase()
    return ele.slice(1) + ele[0] + 'ay'
})

alert(array.join(' ')[0].toUpperCase() + array.join(' ').slice(1))