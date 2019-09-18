var foodContainer = document.getElementById("food");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", "example_1.json");
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    showHTML(myData);
  };
  myRequest.send();
});

function showHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + "This is an " + data[i].fruit + "</p>";
    htmlString += "<p>" + "It is a " + data[i].size + " one" + "</p>";
    htmlString += "<p>" + "It's color is " + data[i].color + "</p>";
  }

  foodContainer.insertAdjacentHTML("beforeend", htmlString);
}
