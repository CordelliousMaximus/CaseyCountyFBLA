/*!
* Start Bootstrap - Business Casual v7.0.6 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
// Tells if store is open
'use strict'
window.addEventListener('DOMContentLoaded', event => {
    const openingHours = [[0,0], [0, 0], [8, 18], [8, 18], [8, 18], [8, 18], [8, 13]];
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    const openClosed = document.getElementById("open-closed");
    let date = new Date().getDay();
    let hours = new Date().getHours(); 

    if(date > 0){
        listHoursArray[date - 1].classList.add(('today'));
    }
    else {
        listHoursArray[6].classList.add('today');
    }

    if(date == 0 || date == 1){
        openClosed.innerHTML = "Sorry we are currently closed";
    }
    else {
        if(hours > openingHours[date][0] && hours < openingHours[date][1]){
            return;
        }
        else{
            openClosed.innerHTML = "Sorry we are currently closed";
        }
    }
});
