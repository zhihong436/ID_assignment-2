var url = "https://ghibliapi.herokuapp.com/films"
var img_url = "https://api.jikan.moe/v3/search/anime?q="
var film_trailer = [
    {"title" : "Castle in the Sky", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8ykEy-yPBFc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Grave of the Fireflies", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4vPeTSRd580" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "My Neighbor Totoro", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/92a7Hj0ijLs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Kiki's Delivery Service", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4bG17OYs-GA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Only Yesterday", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OfkQlZArxw0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Porco Rosso", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/awEC-aLDzjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Pom Poko", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_7cowIHjCD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Whisper of the Heart", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0pVkiod6V0U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Princess Mononoke", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4OiMOHRDs14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "My Neighbors the Yamadas", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1C9ujuCPlnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Spirited Away", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ByXuk9QqQkk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Cat Returns", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Gp-H_YOcYTM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Howl's Moving Castle", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iwROgK94zcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Tales from Earthsea", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8hxYx3Jq3kI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Ponyo", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CsR3KVgBzSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "Arrietty", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9CtIXPhPo0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "From Up on Poppy Hill", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9nzpk_Br6yo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Wind Rises", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jGr8XDxB-9I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "The Tale of the Princess Kaguya", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/W71mtorCZDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    {"title" : "When Marnie Was There", "link" : '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jjmrxqcQdYg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
]
$(document).ready(function(){
  $("#film_submit").click(function(){
      location.href = "test.html"
      localStorage.setItem("title", $("#userInput").val());
      console.log($("#userInput").val());
  })
    var movieTitle = localStorage.title;
    console.log(movieTitle);
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        for (i = 0; i < data.length; i++){
            var option = document.createElement("option");
            option.value = data[i].title;
            option.text = data[i].title;
            $("#userInput").append(option);
            if (data[i].title == movieTitle){
                $(".title").html("Movie Title: " + data[i].title);
                $(".dir").html("Director: " + data[i].director);
                $(".relDate").html("Release Date: " + data[i].release_date);
                $(".prod").html("Producer: " + data[i].producer);
                $(".desc").html(data[i].description);
            }
        }
    })
    fetch("https://api.jikan.moe/v3/search/anime?q=" + movieTitle + "&page=1")
    .then(response => response.json())
    .then(function(data){
        var test_img = data.results[0].image_url;
        console.log(test_img);
        $("#movie_img").attr("src", test_img);
    })
    $("#review_submit").click(function(){
        var user = $("#username").val();
        var review = $("#review_input").val()
        var words = 
        " <h3 class='m-2'>User: </h3>" + "<h5 class='m-2'>" + user + "</h5>"
        //"<h4>User: " + user + "</h4>"
        +"<h4 class='m-2'>Review: </h4>"
        +"<p class='m-2' style = '1.3rem'>"+review+"</p>"
        $(".user").append(words);
    })
    for (i = 0; i < film_trailer.length; i++){
        if (movieTitle == film_trailer[i].title){
            console.log(film_trailer[i].link);
            $("#vid").html(film_trailer[i].link);
        }
    }
    $("#back-btn").click(function(){
        location.href = "index.html"
    })
})



