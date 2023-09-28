const jwtMiddleware = require('../middleware/jwtMiddleware');

const login = ((req, res) => {
    const { login, senha } = req.body;
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD } = process.env;
    if (login === DEFAULT_LOGIN && senha === DEFAULT_PASSWORD) {
        jwtMiddleware.generateTokenMiddleware(req, res, () => {
        var token = res.locals.token;
        return res.json(token);
        }); 
    }
    res.status = 401;
    res.end();
});

module.exports = {
  login
}