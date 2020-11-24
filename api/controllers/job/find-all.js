/**
 * Module dependencies
 */


// ...


/**
 * job/find-all.js
 *
 * Find all.
 */
module.exports = async function findAll(req, res) {
  try {
    const data = await Job.find().populate('jobDetails').populate('company')
    return res.ok(data)
  } catch (error) {
    return res.serverError(error)
  }
};
