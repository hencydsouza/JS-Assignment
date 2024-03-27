var array = ['Hello', 'World', 'in', 'a', 'frame']

var maxLength = (() => {
    let count = 0;
    array.forEach(ele => {
        count = count < ele.length ? ele.length : count
    })
    return count
})();

for (let i = 0; i < array.length + 2; i++) {
    if (i == 0 || i == array.length + 1) {
        console.log('*'.repeat(maxLength + 4))
    } else {
        console.log('* ' + array[i - 1] + ' '.repeat(maxLength - array[i - 1].length)+' *')
    }
}