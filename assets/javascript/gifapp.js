

var topics = ["Dog", "Cat", "Armadillo"]
makeButtons();

function makeButtons() {

    // $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button id='dis' class='btn btn-info dis'>");

        a.addClass("animal");

        a.attr("dataname", topics[i]);

        a.text(topics[i]);

        $("#buttons").append(a).append(" ");

    }
}

$("#input").on("click", function(event) {
   
    event.preventDefault();

    var newAnimal = $("#value").val().trim();

    topics.push(newAnimal);

    makeButtons();
    
});

$(".dis").on("click", buildQueryUrl);

function buildQueryUrl() {
    
    var animal = $(this).attr("dataname");
    console.log(animal);


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
    "&api_key=uYxydRaxL6nM0E5p2WATKqiFQfi4xXlz&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {

            var results = response.data;
            console.log(results);

            for (var i = 0; i < results.length; i++) {

                var animalSpan = $("<span>");

                var p = $("<p>").text("Rating:" + results[i].rating);

                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);

                animalSpan.append(p);
                animalSpan.append(animalImage);

                $("#gifs").prepend(animalSpan);
            }

        });

}

console.log(topics);

