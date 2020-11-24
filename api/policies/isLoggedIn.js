module.exports = async (req, res, next) => {
    try {
        if (!req.headers && !req.headers.authorization) {
            return res.badRequest({ error: 'Authorized required' })
        }
        const token = req.headers.authorization
        const decoded = JwtSevice.verify(token)
        const user = await User.findOne({ id: decoded.id })
        if (!user) {
            return res.badRequest({ error: 'Authorized required' })
        }
        req.user = user
        await next()
    } catch (error) {
        return res.badRequest({ error: 'Authorized required' })
    }

}