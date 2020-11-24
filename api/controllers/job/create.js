/**
 * Module dependencies
 */


// ...


/**
 * job/create.js
 *
 * Create job.
 */
module.exports = async function create(req, res) {
  try {
    let { title, description, salary, position, companyId } = req.allParams()
    if (!title)
      return res.badRequest({ err: 'title is required' })
    if (!salary)
      return res.badRequest({ err: 'title is required' })

    //create job detail
    const jobDetail = await JobDetail.create({
      description,
      salary,
      position
    }).fetch()

    //create job
    const job = await Job.create({
      title: title,
      jobDetails: jobDetail.id,
      company: companyId
    }).fetch()
    return res.ok(job);
  } catch (error) {
    return res.serverError(error)
  }


};
