
const bcrypt = require('bcrypt');

module.exports = async function (req, res, next) {
    let user = req.user;
    let oldPassword = req.param('old_password');
    let valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid)
        return res.status(401).json('password_invalid');
    let password = req.param('password');
    let passwordConfirm = req.param('confirm_password');
    if(password && password !== passwordConfirm)
        return res.status(400).json('password_not_match');
    return next();
}