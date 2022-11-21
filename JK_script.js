// attach login button to variable
let loginButton = document.getElementById('loginButton');

// assign event listener to login button
loginButton.addEventListener('click', function () {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let checkbox = document.getElementById('rememberMe').checked;
    console.log(username, password, checkbox);

    // create new object to send to server
    let loginObject = {
        username: username,
        password: password,
        rememberMe: checkbox
    };

    // check if username and password are correct
    if (username === 'admin' && password === 'admin') {
        // if true execute this code
        console.log('login successful');
        if (checkbox) {
            // if checkbox is checked, save loginObject to local storage
            localStorage.setItem('loginObject', JSON.stringify(loginObject));
            // redirect to secure.html page
            window.location.href = 'secure.html';
        } else {
            sessionStorage.setItem('loginObject', JSON.stringify(loginObject));
            // redirect to secure.html page
            window.location.href = 'secure.html';
        }
    } else {
        // if false execute this code
        alert('Username or password is incorrect');
    }
});