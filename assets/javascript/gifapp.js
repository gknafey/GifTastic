

var topics = ["Dog"]
makeButtons();

function makeButtons() {

    $("#buttons").empty();

    for (var i=0; i < topics.length; i++) {

        var a = $("<buttons id='dis' class='btn btn-info'>");

        a.addClass("animal");

        a.attr("data-name", topics[i]);

        a.text(topics[i]);

        $("#buttons").append(a).append(" ");

        console.log(topics);
    }
}

$("#input").on("click", function(event) {
   
    event.preventDefault();

    var newAnimal = $("#value").val().trim();

    topics.push(newAnimal);

    makeButtons();
    
});

$("#buttons").on("click", buildQueryUrl);
    
//     var animal = $(this).attr("data-name");
    

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
//     "&api_key=uYxydRaxL6nM0E5p2WATKqiFQfi4xXlz&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function(response) {

//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {

//                 var animalSpan = $("<span>");

//                 var p = $("<p>").text("Rating:" + results[i].rating);

//                 var animalImage = $("<img>");

//                 animalImage.attr("src", results[i].images.fixed_height.url);

//                 animalSpan.append(p);
//                 animalSpan.append(animalImage);

//                 $("#gifs").prepend(animalSpan);
//             }

//         });

// });

function buildQueryUrl(x) {
    
    var animal = $(this).get("data-name");
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