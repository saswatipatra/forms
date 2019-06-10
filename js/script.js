$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    });

    $("#story").show();
  });
});
