
var targetNumber = Math.floor(Math.random() * 100) + 1;

$("#number-to-guess").text(targetNumber);

var counter = 0;
$("#my-number").text(counter);

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "./assets/images/blue.jpeg");
  imageCrystal.attr("src", "./assets/images/green.jpeg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}
$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#my-number").text(counter);

  if (counter === targetNumber) {
    $("#score").text("You win!");
  }

  else if (counter >= targetNumber) {
    $("#score").text("You loose");
  }

});

// $("#reset").trigger(imageCrystal);