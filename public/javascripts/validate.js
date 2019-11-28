function createErrors(text) {
    var container = document.getElementById('container');
    if(document.getElementById('errors') != null) {
        container.removeChild(document.getElementById('errors'));
    }
    var errors = document.createElement('div'); 
    errors.setAttribute('id', 'errors');
    errors.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    errors.setAttribute('role', 'alert');
    errors.innerHTML = text;
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'close');
    button.setAttribute('data-dismiss', 'alert');
    button.setAttribute('aria-label', 'Close');
    var span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '&times;'
    button.appendChild(span);
    errors.appendChild(button);
    var form = document.getElementById('form');
    container.insertBefore(errors, form);
}
function validateLogIn() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var user_expression = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    //let phone_expression = /[0-9]{9}/;
    if (user === '' || password === '') {
        createErrors('debes completar los campos.');
        return false;
    }
    else {
        if (user != 'grupo2' && password != '123456') {
            createErrors('Usuario no valido o contraseña no válido.');
            return false;
        }
    }
}