// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#trainingForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the value entered by the user
        var hours = parseInt($('#hours').val());

        // Check if the value is a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert('Please enter a positive number of hours.');
            return;
        }

        // Calculate the total cost
        var rate = 50; // Hourly rate
        var total = hours * rate;

        // Display the total cost
        $('#total').val('$' + total);
    });
});
