/**
 * Module dependencies
 */

// ...


/**
 * company/find-all.js
 *
 * Find all.
 */
module.exports = async function findAll(req, res) {
  try {
    var records = await Company.find().populate('jobs');
    return res.ok(records);
  } catch (error) {
    return res.serverError(err)
  }
};
