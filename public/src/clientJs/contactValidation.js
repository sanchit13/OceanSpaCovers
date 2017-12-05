function validateForm() {
    var phoneNumber = /^\d{10}$/;
    var email = $("#email").val();

    if ($('#name').val().replace(/ /g, '').length < 5) {
        alert("Please Enter in a valid Name")
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please Enter in a Valid E-mail")
        return false;
    }

    if ($('#message').val().replace(/ /g, '').length <= 20) {
        alert("Please Enter in a longer Message")
        return false;
    }

    if (!$('#number').val().match(phoneNumber)) {
        alert("Please Enter in a Valid Number")
        return false;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


$(document).ready(function () {
    $('.slickHandle').slick({
        speed: 300,
        autoplaySpeed : 1200,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
    });
});