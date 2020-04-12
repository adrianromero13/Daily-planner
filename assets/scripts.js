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
    function timeDisplayed() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes()
            if (minutes < 10) {
                minutes = "0" + minutes;
            };
        let seconds = currentTime.getSeconds()
            if (seconds < 10) {
                seconds = "0" + seconds;
            };
        let text = ("Time: " + hours + ':' + minutes + ':' + seconds);
        // here we get the element and change the content to the text variable we made above
        document.getElementById('currentTime').innerHTML = text;
      }
      setInterval(timeDisplayed, 1000);

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
        // console.log('hourOfDay', hourOfDay)

        // function to loop over planner rows for info on hour
        $('.description').each(function() {
            //get number from textarea tag attribute( id) and split value by the ('-')
            //and only keep the second index (only the digit)
            //parseInt converts the string into an integer
            let rowTime = parseInt($(this).attr('id').split('-')[1]);
            // console.log('rowTime', rowTime);

            // set if statements for when hour changes
            if (rowTime < hourOfDay) {
                // add the class attr of past to the parent div
                $(this).parent().addClass('past');
            }
            // set else if for the present class attribute
            else if (rowTime === hourOfDay) {
                //remove other class if they are present
                $(this).removeClass('past');
                $(this).parent().addClass('present');
            }
            // set default else statement
            else {
                // remove old classes to set future
                $(this).removeClass('past', 'present');
                $(this).addClass('future');
            }
        });
        
    }
    timeDepDisplay();

    $('#hour-9').val(localStorage.getItem('hour-9'));
    $('#hour-10').val(localStorage.getItem('hour-10'));
    $('#hour-11').val(localStorage.getItem('hour-11'));
    $('#hour-12').val(localStorage.getItem('hour-12'));
    $('#hour-13').val(localStorage.getItem('hour-13'));
    $('#hour-14').val(localStorage.getItem('hour-14'));
    $('#hour-15').val(localStorage.getItem('hour-15'));
    $('#hour-16').val(localStorage.getItem('hour-16'));
    $('#hour-17').val(localStorage.getItem('hour-17'));
});