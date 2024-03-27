function measureDepth(arr) {
    let count = 0
    while (arr) {
        arr = arr[0]
        count++
    }
    return count
}

console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]))