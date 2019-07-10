

var topics = ["Dog", "Cat", "Armadillo"]
makeButtons();

function makeButtons() {

    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button id='dis' class='btn btn-info dis'>");

        a.addClass("animal");

        a.attr("dataname", topics[i]);

        a.text(topics[i]);

        $("#buttons").append(a).append(" ");  

    }
    $(".dis").on("click", buildQueryUrl);
    
}

$("#input").on("click", function(event) {
   
    event.preventDefault();

    var newAnimal = $("#value").val().trim();

    topics.push(newAnimal);

    makeButtons();
    
});

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

                var animalImage = $("<img>");
                
                var p = $("<p>").text("Rating:" + results[i].rating);

                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalImage.attr("data-state", "still");
                animalImage.attr("class", "gif")
                animalSpan.append(animalImage);
                animalSpan.append(p);

                $("#gifs").prepend(animalSpan);
            }
            $(".gif").on("click", gifClick);

        });

}

function gifClick() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still")
    }
};
$("#gifs").on("click", gifClick);

console.log(topics);

