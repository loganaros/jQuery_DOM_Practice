$("button").on("click", function(e) {
    e.preventDefault();
    $("body").append("<p>Movie: <b>" + $("input").eq(0).val() + "</b> Rating: <b>" + $("input").eq(1).val() + "</b> <button id='delete'>Delete</button></p>");
});
$("body").on("click", "#delete", function() {
    $(this).parent().remove();
    console.log("delete");
});