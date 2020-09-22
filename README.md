# Work Day Scheduler

![picture](assets/images/workDayScheduler.png)

Link : [Project Link](https://cesaraugustomartinez.github.io/Homework_5/Develop/)

---

### Table of Contents

- [Description](#description)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

The goal of this project is create a simple calendar that allows the user to save events for each hour of the day. This app was builded using jQuery code to generate a dynamically HTML and CSS pages. 

##### Technologies

- Html
- jQuery
- Visual Studio Code
- CSS
- Bootstrap
- Moment.js Library

##### Code sample - JQuery
#
```js
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
    var currentHour = moment().hour(); // Getting the current hour using moment.js library
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

```

---

## How To Use

This web application has a page index.html with timeblocks for standard business hours. The user can write events into the text areas and then save the information by clicking the button inside the timeblock. If the user close the browser this app stores all the events and reloads when it is opened again.

 
## Screenshots

- Time Blocks

![picture](assets/images/timeBlocks.png)

- Save Button 

![picture](assets/images/saveButton.png)

- LocalStorage

![picture](assets/images/localStorage.png)


[Back To The Top](#Work-Day-Scheduler)

---

## References

- w3school -- [jQuery Tutorial](https://www.w3schools.com/jquery/)
- Bootstrap -- [Build fast, responsive sites with Bootstrap](https://getbootstrap.com/)
- W3school -- [The HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)
- Moment Libary -- [Parse, validate, manipulate,
and display dates and times in JavaScript.](https://momentjs.com/)


[Back To The Top](#Work-Day-Scheduler)

---

## License

Copyright (c) [2020] [Cesar A Martinez]

[Back To The Top](#Work-Day-Scheduler)

---

## Author Info

- Twitter -- [@cesaguma](https://twitter.com/cesaguma)
- Linkedin -- [Cesar A Martinez](https://www.linkedin.com/in/cesar-augusto-martinez-auquilla-03934a16b/)

[Back To The Top](#Work-Day-Scheduler)
