$(document).ready(function() {

  $('#submit_button').click(function(event){
    event.preventDefault();
    var status = $('<h4 id = "processing"> The form is currently processing </h4>');
    $('#welcome').append(status);
    var tweet_text = { "tweet_text": $('#tweet_text').val()};
      alert(tweet_text);
    $.post('/tweet', tweet_text, function(data){
      alert("Data Loaded: " + data)
    },"json");

  });

});
