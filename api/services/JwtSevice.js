var jwt = require('jsonwebtoken');
const SECRET = '12332132'
module.exports = {
    issuer(payload, expiresIn) {
        return jwt.sign(payload, SECRET, {
            expiresIn: expiresIn
        })
    },
    verify(token) {
        return jwt.verify(token, SECRET)
    }
}