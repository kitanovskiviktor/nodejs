const UserController = require("../Controllers/UserController");

module.exports = app => {
    app.post('/api/register', UserController.register)
}