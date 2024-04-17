document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('accountForm');
    const modal = document.getElementById('errorMessage');
    const closeBtn = modal.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = form.elements['username'].value;
        const role = form.elements['role'].value;
        const phone = form.elements['phone'].value;

        if (username.trim() === '' || role === '' || phone.trim() === '' || isNaN(phone) || phone.length !== 10) {
            modal.style.display = 'block';
        } else {
            // Show change password interface
            // Code to show change password interface
        }
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
