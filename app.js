$(document).ready(function () {
  // anthing that goes on here is wahts displaying on the page.
  // create a variable and console.log the variable.
  console.log('hello one');
  var testVar = "Hi There";
  console.log(testVar);

  // create an array of numbers. console.log the array.
  var theArray = [1,2,3,4];
  console.log(theArray , 'theArray');

  // create an object with a name key and an age.
  var person = {
    name: 'David',
    age: 22,
    hungry: true
  };
  console.log(person , 'person');


  // Make a function called dispalyPerson() which will console.log the object person.
function displayPerson (dynamicParamater) {
  // do logic
  console.log(dynamicParamater, "person");
}

$.each(person, function(index,value) {
  console.log(value, 'value');
});


displayPerson(person);

});

$(function () {
  console.log("hello two");
});

//concantination
