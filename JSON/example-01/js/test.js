var testRequest = new XMLHttpRequest();
testRequest.open("GET", "example_2.json");

testRequest.onload = function() {
  var testData = JSON.parse(testRequest.responseText);
  console.log(testData.quiz.sport.q1);
};

testRequest.send();
