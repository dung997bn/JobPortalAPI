/**
 * Module dependencies
 */


// ...


/**
 * company/create.js
 *
 * Create company.
 */
module.exports = async function create(req, res) {
  let params = req.allParams()
  if (!params.name)
    return res.badRequest({ err: 'name is required' })

  const results = await Company.create({
    name: params.name,
    city: params.city,
    address: params.address,
    user: req.user.id
  }).fetch()


  if (!results.id) {
    return res.serverError(err)
  }
  return res.ok(results)
}


