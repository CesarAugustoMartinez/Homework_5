
$("#currentDay").text(moment().format('dddd , LL'));

$(document).ready(function(){

updateRowTime();
updateData();

$(".saveBtn").on("click", function(){
    var data = $(this).siblings(".description").val();
    var hour = $(this).parents(".time-block").attr("id").split("-")[1];
    localStorage.setItem(hour,data);  
});

});

function updateRowTime(){
    var currentHour = 12; //moment().hour();

    console.log(currentHour);

    $(".time-block").each(function(){
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(rowHour);  
        if (rowHour < currentHour) {
            $(this).addClass("past");
        } else if (rowHour === currentHour) {
            $(this).addClass("present");

        } else {
            $(this).addClass("future"); 
        }
    });

};

function updateData() {
    $(".time-block").each(function(){
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        $(this).children(".description").val(localStorage.getItem(rowHour));
        
    });
};


