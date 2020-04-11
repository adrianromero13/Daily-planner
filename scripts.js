// make all code wait for html to render first
$(document).ready(function () {

    //set up function for current day display on jumbotron
    let currentDate = new Date();
    let dateNow = "Today's Date: " + (currentDate.getMonth() + 1) + "/"
        + currentDate.getDate() + "/"
        + currentDate.getFullYear();
    // 2.text() to display changes
    $('#currentDay').text(dateNow);

    // same for the current time
    let currentTime = new Date();
    let timeNow = "Time: " + currentTime.getHours() + ":"
        + currentTime.getMinutes();
    // set text() to #currentTime
    $('#currentTime').text(timeNow);

// saving textarea value into storage at the click of the save button
    $('.saveBtn').on('click', function () {
        let $task = $(this).siblings('.description').val();
        let time = $(this).siblings('.description').attr('id');

        // set the item in localStorage
        localStorage.setItem(time, $task);
        // alert the value to check if we got it
        alert(`${time} task has been saved`);

    });

    // set up function to change css depending on time of day


})
