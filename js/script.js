$(document).ready(function () {
  $("#input").change(function () {
    let inputValue = $("#input").val();
    $("ul").append(
      "<li>" +
        inputValue +
        '<i class="fa fa-check-circle"></i> <i class="fa fa-trash"></i></li>'
    );
    $("#input").val("");
  });

  //Function to remove an item
  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });

  // Function to strike an item
  $("ul").on("click", ".fa-check-circle", function () {
    $(this).parent("li").toggleClass("checked");
  });

  //sorting the list
  $("#list_sort").sortable();
});
