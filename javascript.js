$(document).ready(function(){
  getQuote();
  var quote;
  var author;
  function getQuote(){
    var url="https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    $.getJSON(url, function(data){
      tweetThis = data.quoteText + " By - " + data.quoteAuthor;
      $(".quote-text").html('"'+data.quoteText+'"');
      $(".quote-author").html("-"+ data.quoteAuthor);
      
    });
    
   
  };
  $("#newquote").on("click",function(){
    getQuote();
  });
  $("#tweet").on("click", function(){
    /*
    openURL('http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));*/
     if (tweetThis.length > 140) {
    tweetThis = "";
    $(this).addClass("disabled");
    $(this).html("Sorry! 140 chars exceeded!");
  } else {
    $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweetThis);
  }

    });
});