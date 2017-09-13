$(function() {
  $("form[name='login']").validate({
        rules: {
            username: 'required',
            password: {
              required: true,
              password: true
            }
        },
        messages: {
            username: 'Please enter your username',
            password: 'Please provide a password'
        },
        submitHandler: form => {
            form.submit();
        }
    });
});

function authGoogle() {

}

function authLinkedin() {

}

function authLocal() {

}