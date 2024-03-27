let array = [1, 4, 3, 2, 5, 7]

function nearestLargerValue(val) {
    let index = array.indexOf(val)
    let left = index - 1
    let right = index + 1

    while (left >= 0 || right < array.length) {
        let curr = array[left] > array[right] ? array[left] : array[right]
        if(curr>val){
            val = curr
            break;
        }
        left -= 1
        right += 1
    }
    return array.indexOf(val)
}

console.log(nearestLargerValue(5))