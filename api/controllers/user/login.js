/**
 * Module dependencies
 */

// ...
const Joi = require('joi');

/**
 * user/login.js
 *
 * Login user.
 */
module.exports = async function login(req, res) {

  try {
    const schema = Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required()
    })

    //validate
    const params = await schema.validateAsync(req.allParams(), {})

    const user = await User.findOne({ email: params.email })
    if (!user)
      return res.notFound({ error: 'email is not exist' })

    const matchPassword = await CommonService.comparePassword(params.password, user.password)

    if (!matchPassword) {
      return res.badRequest({ error: 'unauthorized' })
    }
    let payload = {
      id: user.id,
      email: user.email
    }
    const token = JwtSevice.issuer(payload, 3600)

    return res.ok({ token })

  } catch (error) {
    return res.serverError(error.message);
  }

};
