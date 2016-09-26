
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $("#street").val();
    var city = $("#city").val();
    var windowWidth = $(window).width()
    var windowHeight = $(window).height()
    var streetviewUrl = "url('https://maps.googleapis.com/maps/api/streetview?size=" + windowWidth + 'x' + windowHeight + "&location=" + street + ", " + city + "')";
    $body.css("background-size", windowWidth + "px " + windowHeight + "px");
    $body.css("background-image", streetviewUrl);


    // New York Times Ajax Request
  //  var nytAPIUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  //  var nytKey = "f0420430c1ee4b5aa985bc1d977f8791";
  //  var nytParams = "?apikey=" + apikey + "&q=" + city;
  //  var nytFullUrl = nytAPIUrl + nytParams;
    $.getJSON( "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=f0420430c1ee4b5aa985bc1d977f8791&q=" + city + "'&sort=newest" , function( data ) {
        $("#nytimes-header").text('New York Times Articles About ' + city);

         $.each( data.response.docs, function( key, val ) {
            console.log(val);
        $('<li class="article"><a href="' + val.web_url + '" target="_blank">' + val.headline.main + '</a><p>' + val.snippet + '</p></li>').appendTo($("#nytimes-articles"));
         });


    }).error(function() {
        $("#nytimes-header").text('New York Times Articles Could Not Be Loaded. :(');

    });






    return false;
};

$('#form-container').submit(loadData);
