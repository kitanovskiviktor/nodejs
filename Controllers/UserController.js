const User = require("../Models/UserModel");

module.exports = {

    register(req, res) {
        User.register(req.body)
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(400).json(error));
    }
}