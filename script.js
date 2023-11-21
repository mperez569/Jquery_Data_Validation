"use strict"
$(document).ready(() => {
    $("email").focus();

    $("#member_form").submit(evt => {
        let isValid = true;
        const emailPattern = /\b[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if(email==""){
            $("#email").next().text("This Field is required!");
            isValid = false;
        }else if(email != emailPattern){
            $("#email").next().text("Must be a valid email");
            isValid = false;
        }else{
            $("#email").next().text("*");
            isValid = true;
        }

        if(isValid == false){
            evt.preventDefault();
        }
    });
});
