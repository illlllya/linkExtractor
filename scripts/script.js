$(document).ready(function() {
    $('#replaceButton').click(function() {
        //grabs text value from input field
        var userInput = $('#codeinput').val();

        $('#pastedcode').html(userInput);

        var hrefs = [];
        $('#pastedcode a').each(function() {
            var value = $(this).attr('href');

            hrefs.push(value);

            $(this).attr('href', "${clickthrough}");
        });

        var newHtml = $('#pastedcode').html();

        $('#codeinput').val(newHtml);

        hrefs.forEach((href) => {
            $('#collectedLinks').append(`${href}\n` + '<br>');
        });


    });



    //copy to clipboard
    $('#copyButton').click(function() {

        var clipboard = new Clipboard('#copyButton', {
            target: function() {
                return document.querySelector('#codeinput');
            }
        });

    });

});
