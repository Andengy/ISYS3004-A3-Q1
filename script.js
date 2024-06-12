function validateForm() {
    // Getting form elements
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const interests = document.getElementById('interests');

    // Checking if any field is empty
    if (firstName.value.trim() === '' || surname.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || interests.value.trim() === '') {
        alert("All fields must be filled out");
        return false;
    }
}
