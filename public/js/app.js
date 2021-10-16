console.log('Client side javascript file is loaded!')



const form = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    msg1.textContent = "Fetching data fom server..."
    msg2.textContent = ""

    //fetch("http://localhost:3000/weather?address=" + location).then(res => {
    fetch("/weather?address=" + location).then(res => {
        res.json().then(data => {
            if (data.error) {
                return console.log("err", data.error)
            }
            // console.log("fdata", data)
            console.log("fdata", data)
            msg1.textContent = data
            msg2.textContent = data.forecast
        })
    })


})