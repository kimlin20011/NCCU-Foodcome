(function ($) {
    "use strict";
    var input = $('.validate-input .input100');
    
    console.log('input'+input)
    $('.validate-form').on('submit', function () {
        var check = true;
        console.log('input.length:' + input.length);
        for (var i = 0; i < input.length; i++) {
            console.log('input'+i+':'+input[i]+showValidate(input[i]))
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        alert('check'+check)
        return check;
    })

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        })
    })

    function validate(input) {
        
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
            if ($(input).attr('name') == 'password') {
                console.log('len'+$(input).val().length)
                if ($(input).val().length <= 5 || $(input).val().length > 12) {
                    $(input).val('')
                    return false;

                }

            }





        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        console.log('thisAlert'+thisAlert)
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        console.log('thisAlert'+thisAlert)
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);