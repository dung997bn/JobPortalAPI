/**
 * Module dependencies
 */

// ...


/**
 * company/delete-by-id.js
 *
 * Delete by id.
 */
module.exports = async function deleteById(req, res) {
  try {
    let id = req.param('id');
    if (!id)
      return res.badRequest({ err: 'no id to update' })
    const existed = await Company.findOne({ id: id })
    if (!existed) {
      return res.badRequest({ err: 'no document found with id' })
    }
    var destroyedResult = await Company.destroyOne({ id: id });
    return res.ok(destroyedResult)
  } catch (error) {
    return res.serverError(error.message)
  }
};
