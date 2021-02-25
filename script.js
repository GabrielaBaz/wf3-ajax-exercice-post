$(document).ready(function () {
  $("form").submit(function (event) {
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      yourName: $("#yourName").val(),
    };

    // process the form
    $.ajax({
      type: "POST", // define the type of HTTP verb we want to use (POST for our form)
      url: "post.php", // the url where we want to POST
      data: formData, // our data object
      dataType: "json", // what type of data do we expect back from the server
      encode: true,
    })
      // using the done promise callback
      .done(function (message) {
        // log data to the console so we can see
        if (message.yesName != "") {
          $("#afficher").html(message.yesName);
        }

        if (message.noName != "") {
          $("#afficher").html(message.noName);
        }

        // here we will handle errors and validation messages
      })

      .fail(function (xhr, status, errorThrown) {
        $("#afficher").html(
          '<div class="alert alert-danger" role="alert">Houston, we have a problem.</div>'
        );
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        //console.dir(xhr);
      });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
});
