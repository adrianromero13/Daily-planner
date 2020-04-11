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
    function timeDepDisplay() {
        //current hour of the day
        let hourOfDay = moment().hours();
        console.log('hourOfDay', hourOfDay)

        // function to loop over planner rows for info on hour
        $('.description').each(function() {
            //get number from textarea tag attribute( id) and split value by the ('-')
            //and only keep the second index (only the digit)
            //parseInt converts the string into an integer
            let rowTime = parseInt($(this).attr('id').split('-')[1]);
            console.log('rowTime', rowTime);

            // set if statements for when hour changes
            
        })
        
    }
    timeDepDisplay();

})
