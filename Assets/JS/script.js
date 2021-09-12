var rootEl = $("#root");
var dayDisplayEl = $("#currentDay");
var containerEl = $("#container");
//Form elements
var inputElEight = $("#eight-input");
var inputElNine = $("#nine-input");
var inputElTen = $("#ten-input");
var inputElEleven = $("#eleven-input");
var inputElTwelve = $("#twelve-input");
var inputElOne = $("#one-input");
var inputElTwo = $("#two-input");
var inputElThree = $("#three-input");
var inputElFour = $("#four-input");
var inputElFive = $("#five-input");
var calendarInput = $(".calendarInput");
var timeEntry = $(".timeEntry");
//calendar list item elements
var calListEight = $("#calApptEight");
var calListNine = $("#calApptNine");
var calListTen = $("#calApptTen");
var calListEleven = $("#calApptEleven");
var calListTwelve = $("#calApptTwelve");
var calListOne = $("#calApptOne");
var calListTwo = $("#calApptTwo");
var calListThree = $("#calApptThree");
var calListFour = $("#calApptFour");
var calListFive = $("#calApptFive");
var calListSix = $("#calApptSix");
var calListSeven = $("#calApptSeven");

window.onload = function () {
  // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
  if (sessionStorage.getItem(inputElEight) == "") {
    return;
  }

  // If values are not blank, restore them to the fields
  var name = sessionStorage.getItem(inputElEight);
  if (name !== null) $("").val(name);
};

// Before refreshing the page, save the form data to sessionStorage
window.onbeforeunload = function () {
  sessionStorage.setItem("", $(inputElEight).val());
};

function displayTime() {
  Date.prototype.getUTCDay();
}

// var dayYear = moment().format("DDD");
// $("#3a").text(dayYear);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   // select form element by its `name` attribute and get its value
//   var calItemEight = $('input[name="calendar-input-eight"]').val();

//   // if there's nothing in the form entered, don't print to the page
//   if (!calItemEight) {
//     console.log("No shopping item filled out in form!");
//     return;
//   }

//   // print to the page
//   calListEight.append("<li>" + calItemEight + "</li>");

//   // clear the form input element
//   $('input[name="calendar-input-eight"]').val("");
// }

// // Create a submit event listener on the form element
// formElEight.on("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   // select form element by its `name` attribute and get its value
//   var calItemNine = $('input[name="calendar-input-nine"]').val();

//   // if there's nothing in the form entered, don't print to the page
//   if (!calItemNine) {
//     console.log("No shopping item filled out in form!");
//     return;
//   }

//   // print to the page
//   calListNine.append("<li>" + calItemNine + "</li>");

//   // clear the form input element
//   $('input[name="calendar-input-nine"]').val("");
// }

// // Create a submit event listener on the form element
// formEl.on("submit", handleFormSubmit);

// //   // print to the page
// //   calList.append("<li>" + calendarApptNine + "</li>");
// //   $('input[name="calendar-input-nine"]').val("");

// //   calListTen.append("<li>" + calendarInputTen + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListEleven.append("<li>" + calendarInputEleven + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListTwelve.append("<li>" + calendarInputTwelve + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListOne.append("<li>" + calendarInputOne + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListTwo.append("<li>" + calendarInputTwo + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListThree.append("<li>" + calendarInputThree + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListFour.append("<li>" + calendarInputFour + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListFive.append("<li>" + calendarInputFive + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListSix.append("<li>" + calendarInputSix + "</li>");
// //   $('input[name="calendar-input"]').val("");
// //   calListSeven.append("<li>" + calendarInputSeven + "</li>");
// //   $('input[name="calendar-input"]').val("");
// // }

// // // Create a submit event listener on the form element
// // formElEight.on("submit", handleFormSubmit);
// // formElNine.on("submit", handleFormSubmit);
// // formElTen.on("submit", handleFormSubmit);
// // formElEleven.on("submit", handleFormSubmit);
// // formElTwelve.on("submit", handleFormSubmit);
// // formElOne.on("submit", handleFormSubmit);
// // formElTwo.on("submit", handleFormSubmit);
// // formElThree.on("submit", handleFormSubmit);
// // formElFour.on("submit", handleFormSubmit);
// // formElFive.on("submit", handleFormSubmit);
// // formElSix.on("submit", handleFormSubmit);
// // formElSeven.on("submit", handleFormSubmit);

// save reference to important DOM elements
var rootEl = $("#root");
var timeDisplayEl = $("#time-display");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var appointmentFormEl = $("#appointment-form");
var appointmentDetailsInputEl = $("#appointment-details-input");
var calendarInputEl = $("#calendar-input");
var appointmentDisplay = $("calendar-display");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// handle printing project data to the page
function printCalendarData(
  eight,
  nine,
  ten,
  eleven,
  twelve,
  one,
  two,
  three,
  four,
  five
) {
  var projectRowEl = $("<tr>");

  appointmentFormEl = $("<tr>").addClass("p-2").text(appointmentDetailsInputEl);

  appointmentDetailsInputEl = $("<td>").addClass("p-2").text(calendarInputEl);

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  calendarRowEl.append(appointmentFormEl, appointmentDetailsEl);

  apppointmentDisplayEl.append(calendarRowEl);

  projectModalEl.modal("hide");
}

function calculateTotalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  var total = dailyTotal * days;
  return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent("tr").remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on("submit", handleProjectFormSubmit);
projectDisplayEl.on("click", ".delete-project-btn", handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
