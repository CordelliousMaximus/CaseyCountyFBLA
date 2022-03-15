/*!
* Start Bootstrap - Business Casual v7.0.6 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
// Tells if store is open
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    const openClosed = document.getElementById("open-closed");
    let date = new Date().getDay(); 

    listHoursArray[new Date().getDay()].classList.add(('today'));

    (date == 0 || date == 1) ? (openClosed.innerHTML = "Sorry we are currently closed") : null;
});
