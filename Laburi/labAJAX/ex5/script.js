$(document).ready(function () {
  $.ajax({
    url: "http://localhost/temaAJAX/ex5/loadChildrenV2.php",
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      populateUL($("#root"), data);
    },
  });

  function populateUL($ul, data) {
    // Register the given UL element as the root in a new data structure
    var hash = {
      0: { $ul: $ul },
    };
    // Key the objects by their id, and create individual LI elements for them,
    // and an empty UL container for their potential child elements
    data.forEach(function (o) {
      var $ul = $("<ul>");
      hash[o.id] = {
        $ul: $ul,
        $li: $("<li>")
          .text(o.nume)
          .append($ul)
          .click(function (e) {
            console.log(e);
            if (e.target == e.currentTarget) {
              $.ajax({
                url: "http://localhost/temaAJAX/ex5/loadFile.php?id=" + o.id,
                method: "GET",
                contentType: "application/json",
                dataType: "json",
                success: function (data) {
                  console.log("fisiere: ", o.id, data);
                  populateULFile(data);
                },
              });
            }
          }),
      };
    });
    // Append each LI element to the correct parent UL element
    data.forEach(function (o) {
      hash[o.idParinte].$ul.append(hash[o.id].$li);
    });
  }

  function populateULFile(data) {
    // Key the objects by their id, and create individual LI elements for them,
    // and an empty UL container for their potential child elements
    $("#fisiere").empty();

    data.forEach(function (o) {
      $("#fisiere").append(
        $("<li>")
          .text(o.nume)
          .click(function (e) {
            $("#titluFisier").text(o.nume);
            $("#continutFisier").text(o.continut);
          })
      );
    });
  }
});
