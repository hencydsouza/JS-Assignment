let greeting = 'hello'
let name = 'world'

let concatinate = greeting + " " + name

let result = concatinate.replace(/l/g, 1)
result = result.replace(/o/g, 0)

let reverse = result.split('').reverse().join('')

alert(concatinate)
alert(result)
alert(reverse)