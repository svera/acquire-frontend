$(function() {
    if (!window["WebSocket"]) {
        return;
    }

  $("#newGame").submit(function(e) {
    e.preventDefault();

    $.post("http://localhost:8001/create",
        {game: "acquire"},
        function(data, status) {
            window.location.replace("/"+data);
        });
  });

});
