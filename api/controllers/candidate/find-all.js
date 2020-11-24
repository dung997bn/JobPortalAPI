/**
 * Module dependencies
 */


// ...


/**
 * candidate/find-all.js
 *
 * Find all.
 */
module.exports = async function findAll(req, res) {

  try {
    const apps = await Candidate.find().populateAll()
      // .populate('jobs').populate('jobDetails')
      
    return res.ok(apps);
  }
  catch (error) {
    return res.serverError(error);
  }

};
