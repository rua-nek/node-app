const account = require('../models/account');
class UsersController {
    index(req, res) {
        res.json({
            message: 'Hello World!'
        });
    }
    login(req, res) {
        const { username, password } = req.body;
    
        account.findOne({ username, password })
            .then(user => {
                if (user) {
                    // Nếu đăng nhập thành công, chuyển hướng đến trang home
                    res.redirect('/home');
                } else {
                    // Nếu không tìm thấy tài khoản
                    res.json({
                        message: 'Login failed: Invalid username or password'
                    });
                }
            })
            .catch(err => {
                console.error('Error during login:', err);
                res.status(500).json({
                    message: 'Login failed: Server error'
                });
            });
    }
    
    

}
module.exports = new UsersController();