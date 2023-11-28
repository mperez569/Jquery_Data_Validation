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
        }else if(!emailPattern.test(email)){
            $("#email").next().text("Must be a valid email");
            isValid = false;
        }else{
            $("#email").next().text("*");
            isValid = true;
        }

        const password = $("#password").val().trim();
        if(password.length < 6){
            $("#password").next().text("Must be at least 6 characters!!!");
            isValid = false;
        }
        else{
            $("#password").next().text("*");
        }

        const verify = $("#verify").val().trim();
        if(verify.length < 6){
            $("#verify").next().text("Must be at least 6 characters!!!");
            isValid = false;
        }
        else if (password!=verify){
            $("#verify").next().text("Passwords must match!!!");
            isValid = false;
        }
        else{
            $("#verify").next().text("*");
        }
        if(isValid == false){
            evt.preventDefault();
        }
    });
});
