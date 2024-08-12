let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let getTime = () => {
    let date = new Date();
    hours.innerHTML = date.getHours() > 10 ? date.getHours() : ('0' + date.getHours());
    minutes.innerHTML = date.getMinutes() > 10 ? date.getMinutes() : ('0' + date.getMinutes());
    seconds.innerHTML = date.getSeconds() > 10 ? date.getSeconds() : ('0' + date.getSeconds());
};
getTime();
setInterval(getTime, 1000);
