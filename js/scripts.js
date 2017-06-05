$(document).ready(function() {
  $("form#form-favorite-things").submit(function(event) {

    var things = [];

    things.push($("input#name").val()),
    things.push($("input#band").val()),
    things.push($("input#food").val()),
    things.push($("input#city").val()),
    things.push($("input#hobby").val());

    alert(things.toString());

    $("#inputName").text(things[0]);
    $("#inputBand").text(things[1]);
    $("#inputFood").text(things[2]);
    $("#inputCity").text(things[3]);
    $("#inputHobby").text(things[4]);




    event.preventDefault();
  });
});
