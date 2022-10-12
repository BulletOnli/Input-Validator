const showPassword = document.getElementById('showPassword')
const errorContainer = document.querySelector('.errorContainer')

// Show password checkbox 
function checkbox() {
    if (showPassword.checked) {
        inputPassword.type = 'text'
    } else {
        inputPassword.type = 'password'
    }
}

// Check Username Input
function checkUsername() {
    const inputUsername = document.getElementById('inputUsername').value

    if (inputUsername.length > 10) {
        document.querySelector('.validOne').style.display = 'flex'
        errorContainer.style.display = 'flex'
    } else {
        document.querySelector('.validOne').style.display = 'none'
    }
}

// Check Password Input
function checkPassword() {
    const inputPassword = document.getElementById('inputPassword').value    

    if (inputPassword.match(/[^a-z0-9]/i)) {
        document.querySelector('.validTwo').style.display = 'block'
        document.querySelector('.errorMessage').style.visibility = 'visible'
        errorContainer.style.display = 'flex'
    } else {
        document.querySelector('.validTwo').style.display = 'none'
    }

    if (inputPassword.match(/[A-Z]/)) {
        document.querySelector('.validThree').style.display = 'none'
        document.querySelector('.errorMessage').style.visibility = 'visible'
    } else {
        document.querySelector('.validThree').style.display = 'block'
        document.querySelector('.errorMessage').style.visibility = 'hidden'
        errorContainer.style.display = 'flex'
    }
    
    if (inputPassword.match(/[0-9]/)) {
        document.querySelector('.validFour').style.display = 'none'
        document.querySelector('.errorMessage').style.visibility = 'hidden'
    } else {
        document.querySelector('.validFour').style.display = 'block'
        document.querySelector('.errorMessage').style.visibility = 'visible'
        errorContainer.style.display = 'flex'
    }

    if (inputPassword === '') {
        document.querySelector('.validTwo').style.display = 'none'
        document.querySelector('.validThree').style.display = 'none'
        document.querySelector('.validFour').style.display = 'none'
        document.querySelector('.errorMessage').style.visibility = 'hidden'
        errorContainer.style.display = 'none'
    }
}