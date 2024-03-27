let date = new Date()

// let hour = date.getHours()
let hour = 0

if (hour < 12) {
    alert("Morning!")
} else if (hour < 16) {
    alert("Afternoon!")
} else if (hour < 19) {
    alert("Evening!")
} else {
    alert("Night!")
}