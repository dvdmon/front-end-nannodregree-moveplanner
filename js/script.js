
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


    // YOUR CODE GOES HERE!


    return false;
};

$('#form-container').submit(loadData);
