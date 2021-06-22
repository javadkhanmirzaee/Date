setInterval(() =>{
    let item = document.querySelector('.item')
let date = new Date()
let dey_night = 'AM'
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (hours > 12) {
    dey_night = 'pm'
}
if (hours < 10) {
    hours = '0' + hours
}
if (minutes < 10) {
    minutes = '0' + minutes
}
if (seconds < 10) {
    seconds = '0' + seconds
}
item.textContent = hours + ':' + minutes + ':' + seconds + ' ' +  dey_night;
})