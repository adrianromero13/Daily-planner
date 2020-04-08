//set up function for current day display on jumbotron
// 1. catch html element (location) and set as variable
let currentDate = new Date();
let dateNow = "Today's Date: " + (currentDate.getMonth()+1) + "/"
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



// set up function to change css depending on time of day
// 1. for each method to run function through each HTML id 
// 2. set variable for the css changes (in this case class attributes)
// 3.attr() changes depending on time (past, current, future)


// set up function to save textarea to localstorage
// 1. .this() on any save button to save textarea
// 2. set text as variable
$('text-center').on('click', function() {
    let $task = $('textarea').this().text();
    
    // set the item in localStorage
    localStorage.setItem('test', $task);
    
    // alert the value to check if we got it
    console.log(alert(localStorage.getItem('test')));
    // 3. transfer to local storage
    // 4. make retrievable
   

});
