/**
 * Module dependencies
 */

// ...


/**
 * company/find-one.js
 *
 * Find one.
 */
module.exports = async function findOne(req, res) {
  try {
    let name = req.query.name;
    if (!name) {
      return res.badRequest({ err: 'Enter name to find' })
    }
    var records = await Company.findOne({
      name: name
    });
    return res.ok(records);
  } catch (error) {
    return res.serverError(error.message)
  }
};
