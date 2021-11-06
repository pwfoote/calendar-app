//current day var
var currentDay = moment().format("dddd,MMMM Do");

//create timblock with moment.js
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hours = [hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15,];


//local stoarge
var events7 = JSON.parse(localStorage.getItem('hour7')) || "";
var events8 = JSON.parse(localStorage.getItem('hour8')) || "";
var events9 = JSON.parse(localStorage.getItem('hour9')) || "";
var events10 = JSON.parse(localStorage.getItem('hour10')) || "";
var events11 = JSON.parse(localStorage.getItem('hour11')) || "";
var events12 = JSON.parse(localStorage.getItem('hour12')) || "";
var events13 = JSON.parse(localStorage.getItem('hour13')) || "";
var events14 = JSON.parse(localStorage.getItem('hour14')) || "";
var events15 = JSON.parse(localStorage.getItem('hour9')) || "";
console.log(events7);
    //append elements   
$.each(hours, function (index, value) {
    events = [events7, events8, events9, events10, events11, events12, events13, events14, events15]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

//current date at top
$("#currentDay").text(currentDay);


var checkTime = function () {
    currentTime = moment().format("h:m:s A");

    //7am-8am
    if (moment().isBetween(hour7, hour8)) {
        $("#timeblock7").addClass("current");
    }
    else if (moment().isAfter(hour8)) {
        $("#timeblock7").addClass("past");
    }
    else {
        $("#timeblock7").addClass("future");
    }

    //8am-9am
    if (moment().isBetween(hour8, hour9)) {
        $("#timeblock8").addClass("current");
    }
    else if (moment().isAfter(hour9)) {
        $("#timeblock8").addClass("past");
    }
    else {
        $("#timeblock8").addClass("future");
    }
    //9am-10am
    if (moment().isBetween(hour9, hour10)) {
        $("#timeblock9").addClass("current");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }
    //10am-11am,
    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock10").addClass("current");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

    //11am-12pm
    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock11").addClass("current");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

    //12pm-1pm
    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock12").addClass("current");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    //1pm-2pm
    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock13").addClass("current");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

    //2pm-3pm
    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock14").addClass("current");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock")
    }
};

//delete && save functions for timeblocks



checkTime();
