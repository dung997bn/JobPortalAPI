/**
 * Module dependencies
 */

// ...


/**
 * application/fill-all.js
 *
 * Fill all.
 */
module.exports = async function findAll(req, res) {
  try {
    const apps = await Application.find()
      .populate('job')
      .populate('candidate');
    return res.ok(apps);
  }
  catch (err) {
    return res.serverError(error);
  }
};
