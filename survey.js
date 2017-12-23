/* ===== Logic for creating select boxes on survey page ===== */
$('.sel').each(function () {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function (i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function () {
    $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function () {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});

/* ===== Logic for friend matching ===== */
// Capture form inputs
$(document).ready(function () {

    $("#submit").on("click", function () {

        function validateForm() {
            var isValid = true;
            $(".form-control").each(function() {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".question").each(function() {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            return isValid;
        }

        if (validateForm() == true) {
            // Create an object to hold the user data
            var userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [$("#q1").val(),$("#q2").val(),$("#q3").val(),$("#q4").val(),$("#q5").val(),$("#q6").val(),$("#q7").val(),$("#q8").val(),$("#q9").val(),$("#q10").val(),]
              };
        }

        var currentURL = window.location.origin;

        // Post the user data object to /api/friends
        $.post(currentURL + "/api/friends", userData, function(response) {

            // Add the name and photo from the response to the modal for the best match
            $("#matchName").text(response.name);
            $("#matchPhoto").attr("src", data.photo);

            
            // Show the modal with the best match 
            $("#resultModal").modal('toggle');
        });

    });
}) 

