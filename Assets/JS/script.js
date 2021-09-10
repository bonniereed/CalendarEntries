var rootEl = $("#root");
var dayDisplayEl = $("#currentDay");
var containerEl = $("#container");
//Form elements
var formElOne = $("#one");
var formElTwo = $("#two");
var formElThree = $("#three");
var formElFour = $("#four");
var formElFive = $("#five");
var formElSix = $("#six");
var formElSeven = $("#seven");
var formElEight = $("#eight");
var formElNine = $("#nine");
var formElTen = $("#ten");
var formElEleven = $("#eleven");
var formElTwelve = $("#twelve");
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

function displayTime() {
  Date.prototype.getDay();
  dayDisplayEl.text(rightNow);
}

var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var calItemEight = $('input[name="calendar-input-eight"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!calItemEight) {
    console.log("No shopping item filled out in form!");
    return;
  }

  // print to the page
  calListEight.append("<li>" + calItemEight + "</li>");

  // clear the form input element
  $('input[name="calendar-input-eight"]').val("");
}

// Create a submit event listener on the form element
formElEight.on("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var calItemNine = $('input[name="calendar-input-nine"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!calItemNine) {
    console.log("No shopping item filled out in form!");
    return;
  }

  // print to the page
  calListNine.append("<li>" + calItemNine + "</li>");

  // clear the form input element
  $('input[name="calendar-input-nine"]').val("");
}

// Create a submit event listener on the form element
formEl.on("submit", handleFormSubmit);

//   // print to the page
//   calList.append("<li>" + calendarApptNine + "</li>");
//   $('input[name="calendar-input-nine"]').val("");

//   calListTen.append("<li>" + calendarInputTen + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListEleven.append("<li>" + calendarInputEleven + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListTwelve.append("<li>" + calendarInputTwelve + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListOne.append("<li>" + calendarInputOne + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListTwo.append("<li>" + calendarInputTwo + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListThree.append("<li>" + calendarInputThree + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListFour.append("<li>" + calendarInputFour + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListFive.append("<li>" + calendarInputFive + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListSix.append("<li>" + calendarInputSix + "</li>");
//   $('input[name="calendar-input"]').val("");
//   calListSeven.append("<li>" + calendarInputSeven + "</li>");
//   $('input[name="calendar-input"]').val("");
// }

// // Create a submit event listener on the form element
// formElEight.on("submit", handleFormSubmit);
// formElNine.on("submit", handleFormSubmit);
// formElTen.on("submit", handleFormSubmit);
// formElEleven.on("submit", handleFormSubmit);
// formElTwelve.on("submit", handleFormSubmit);
// formElOne.on("submit", handleFormSubmit);
// formElTwo.on("submit", handleFormSubmit);
// formElThree.on("submit", handleFormSubmit);
// formElFour.on("submit", handleFormSubmit);
// formElFive.on("submit", handleFormSubmit);
// formElSix.on("submit", handleFormSubmit);
// formElSeven.on("submit", handleFormSubmit);
