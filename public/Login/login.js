function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    fetch('http://localhost:8989', {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
            },
        body: JSON.stringify({
            username: username,
            password: password,
            role: role
        })
    })
    .then(res => res.json())
    //data
    .then( (json) => {
        //if (data && data.hasOwnProperty('success') && data.success === true) {
        if (json._username === username && json._password === password && json._role === role) {
            window.location.href = '../menu/menu.html'; // Chuyển hướng nếu đăng nhập thành công
        } 
        else {
            alert("Đăng nhập không thành công, vui lòng kiểm tra lại thông tin đăng nhập hoặc quyền truy cập của bạn.");
        }
    })

    // Kiểm tra đăng nhập (giả định đây là dữ liệu hợp lệ)
    /*if (username === "admin" && password === "admin" && role === "admin") {
        window.location.href = '../menu/menu.html'; // Chuyển hướng nếu đăng nhập thành công
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng, hoặc bạn không có quyền truy cập với vai trò này.');
    }*/
}
