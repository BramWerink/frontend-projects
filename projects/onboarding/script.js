let user = {
    name: '',
    surname: '',
    email:'',
    username: '',
    password: '',
    sector: '',

}

console.log(user);

// Als button pressed -> user object aanvullen met input values

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    user = {
        name: document.querySelector('input[name="fname"]').value,
        surname: document.querySelector('input[name="surname"]').value,
        email: document.querySelector('input[name="email"]').value,
        username: document.querySelector('input[name="username"]').value,
        password: document.querySelector('input[name="password"]').value,
        sector: document.querySelector('select[name="sector"]').value
    };

    let passwordCheck = document.querySelector('input[name="password-check"]').value;

    if (user.password !== passwordCheck) {
        alert('Passwords do not match');
    } else{
        document.getElementById('name').innerHTML = user.name + "&nbsp" + user.surname;
        document.getElementById('email').innerHTML = user.email;
        document.getElementById('username').innerHTML = user.username;
        document.getElementById('sector').innerHTML = user.sector;
    }

});
