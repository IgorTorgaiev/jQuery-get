// Content and Attribute

$(document).ready(function(){
  $("#text").click(function(){
    alert("Here is the Text: " + $("#result").text());  
  });
  $("#html").click(function(){
      alert("Here is HTML: " + $("#result").html());
  });
});

// Value

$(document).ready(function(){
    $("#val").click(function(){
        alert("Value: " + $("#value").val());
    });
});

// Attributes

$(document).ready(function(){
    $("button").click(function(){
        alert($("#page").attr("href"));
    });
});