/**
 * Module dependencies
 */
const Joi = require('joi');
// ...


/**
 * user/sign-up.js
 *
 * Sign up.
 */
module.exports = async function signUp(req, res) {
  try {
    const schema = Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required()
    })

    //validate
    const params = await schema.validateAsync(req.allParams(), {})

    const encryptedPassword = await CommonService.hashPassword(params.password)

    const user = await User.create({
      email: params.email,
      password: encryptedPassword
    }).fetch()

    return res.ok(user);
  } catch (error) {
    return res.serverError(error.message);
  }


};
