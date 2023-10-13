$(document).ready(function() {
    var tofix1_fix_pos = $("#tofix1").offset().top;
    var tofix1_pos = $("#tofix1").offset().top;
    var tofix2_pos = $("#tofix2").offset().top;

    var tofix1_height = $("#tofix1").outerHeight(); // Get the height of tofix1

    $(window).scroll(function () {
        var current_pos = $(window).scrollTop();

        if (current_pos > tofix1_pos){
            $("#tofix1").addClass("fixed");
            $("#tofix1").css("top", "0"); // Keep tofix1 at the top of the page
        } else {
            $("#tofix1").removeClass("fixed");
            $("#tofix1").css("top", ""); // Remove top property
        }

        /*
        if (current_pos > tofix1_fix_pos) {
            $("#tofix1").addClass("fixed");
            $("#tofix1").css("top", "0"); // Keep tofix1 at the top of the page
        }

        if (current_pos > tofix1_pos) {
            $("#ban-background").css("background-image", "url('https://imgur.com/siYp9TL.jpg')");
        } else {
            $("#ban-background").css("background-image", "url('https://imgur.com/HdDPIc8.jpg')");
        }
        */
    });
});