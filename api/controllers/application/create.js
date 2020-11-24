/**
 * Module dependencies
 */

// ...


/**
 * application/create.js
 *
 * Create application.
 */
module.exports = async function create(req, res) {
  try {
    const { name, email, jobId } = req.allParams();
    if (!name) {
      return res.badRequest({ err: 'candidate name is required' });
    }
    if (!email) {
      return res.badRequest({ err: 'candidate email is required' });
    }
    if (!jobId) {
      return res.badRequest({ err: 'jobId is required' });
    }
    const candidate = await Candidate.create({
      name: name,
      email: email
    }).fetch();

    const app = await Application.create({
      candidate: candidate.id,
      job: jobId
    }).fetch();
    return res.ok(app);
  }
  catch (error) {
    return res.serverError(error);
  }
};
