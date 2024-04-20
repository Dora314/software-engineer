function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Kiểm tra đăng nhập (giả định đây là dữ liệu hợp lệ)
    if (username === "admin" && password === "admin" && role === "admin") {
        window.location.href = '../menu/menu.html'; // Chuyển hướng nếu đăng nhập thành công
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng, hoặc bạn không có quyền truy cập với vai trò này.');
    }
}
