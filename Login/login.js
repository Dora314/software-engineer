function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'admin' && role === 'admin') {
        alert('Đăng nhập thành công với vai trò Quản lý!');
        window.location.href = "menu/menu.html";
    } else {
        alert('Thông tin đăng nhập không chính xác.');
    }
}
