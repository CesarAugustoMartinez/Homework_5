
$("#currentDay").text(moment().format('dddd , LL')); // Getting the current date using moment.js library

$(document).ready(function(){

// Calling functions    
updateRowTime(); 
loadData();
$(".saveBtn").on("click", function(){ // Storing data into localStorage
    var data = $(this).siblings(".description").val();
    var hour = $(this).parents(".time-block").attr("id").split("-")[1];
    localStorage.setItem(hour,data);  
    });
});

function updateRowTime(){ // Changing style according to the current time
    var currentHour = 12; //moment().hour(); // Getting the current hour using moment.js library
    $(".time-block").each(function(){
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        if (rowHour < currentHour) {
            $(this).addClass("past");
        } else if (rowHour === currentHour) {
            $(this).addClass("present");

        } else {
            $(this).addClass("future"); 
        }
    });

};

function loadData() { // Loading data from the localStorage to each hour.
    $(".time-block").each(function(){
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        $(this).children(".description").val(localStorage.getItem(rowHour));
    });
};


