/**
 * Module dependencies
 */

// ...


/**
 * company/update-by-id.js
 *
 * Update by id.
 */
module.exports = async function updateById(req, res) {
  try {
    let id = req.param('id');
    if (!id)
      return res.badRequest({ err: 'no id to update' })
    const existed = await Company.findOne({ id: id })
    if (!existed) {
      return res.badRequest({ err: 'no document found with id' })
    }
    let params = req.allParams()
    let model = {
      name: params.name,
      city: params.city,
      address: params.address
    }
    if (!params.name)
      return res.badRequest({ err: 'name is required' })

    const results = await Company.updateOne({ id: id })
      .set(model)
    res.ok(results)
  } catch (error) {
    return res.serverError(error.message)
  }
};
