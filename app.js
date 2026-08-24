"use strict";
$(document).ready(function () {

    function myel(vall, myclass = "") {
        let newH3 = $('<h3></h3>')
        let newDiv = $(`<div class="line ${myclass}"></div>`)
        let bigDiv = $('<div></div>')

        $(newH3).append(vall)
        $(newDiv).append(newH3)
        $(bigDiv).append(newDiv)
        return bigDiv
    }

    $("#me").click(function (e) {
        e.preventDefault();
        let vall = $.trim($("#inputme").val());
        if (vall !== '') {
            $("#messageme").append(myel(vall, 'own'));     // öz qutusunda -> sağda
            $("#messageyou").append(myel(vall, 'other'));  // qarşı qutuda -> solda
            $("#inputme").val("");
        }
    });

    $("#you").click(function (e) {
        e.preventDefault();
        let vall = $.trim($("#inputyou").val());
        if (vall !== '') {
            $("#messageyou").append(myel(vall, 'own'));    // öz qutusunda -> sağda
            $("#messageme").append(myel(vall, 'other'));   // qarşı qutuda -> solda
            $("#inputyou").val("");
        }
    });

});