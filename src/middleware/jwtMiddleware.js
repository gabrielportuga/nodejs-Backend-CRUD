const jwt = require("jsonwebtoken");

const generateTokenMiddleware = (req, res, next) =>  {
    const user = req.body.login;
    const { JWT_SECRET } = process.env;
    var token = jwt.sign({ user: `${user}` }, JWT_SECRET, { expiresIn: '1h' });
    res.locals.token = token;
    console.info('JWT Middleware - generated token for user: ' + user);
    next();
}

const validateTokenMiddleware = (req, res, next) =>  {
    try {
        const { JWT_SECRET } = process.env;
        const auth = req.headers.authorization;
        const token = auth.replace('Bearer ', '');
        if (auth) {
            const decoded = jwt.verify(token, JWT_SECRET);
            res.locals = { user: decoded.user };
            console.info('JWT Middleware - validated token for user: ' + decoded.user);
        }
        else throw new Error("token not found");
    }
    catch (err) {
        console.info('JWT Middleware - error validating token\n' + err);
        res.sendStatus(401);
        return res.end();
    }
    next();
}

module.exports = {
  generateTokenMiddleware,
  validateTokenMiddleware
};
