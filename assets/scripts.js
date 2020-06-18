// make all code wait for html to render first
$(document).ready(function () {

  //set up function for current day display on jumbotron
  let currentDate = new Date();
  let dateNow = "Today's Date: " + (currentDate.getMonth() + 1) + "/"
    + currentDate.getDate() + "/"
    + currentDate.getFullYear();
  $('#currentDay').text(dateNow);

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
    document.getElementById('currentTime').innerHTML = text;
  }
  // refreshes the function every second
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
    let hourOfDay = moment().hours();
    $('.description').each(function () {
      let rowTime = parseInt($(this).attr('id').split('-')[1]);
      if (rowTime < hourOfDay) {
        $(this).parent().addClass('past');
      }
      else if (rowTime === hourOfDay) {
        $(this).removeClass('past');
        $(this).parent().addClass('present');
      }
      else {
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
