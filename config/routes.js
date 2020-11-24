/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    //Company
    'POST /api/v1/company/create': { action: 'company/create' },
    'GET /api/v1/company/find': { action: 'company/find' },
    'GET /api/v1/company/find-one': { action: 'company/find-one' },
    'GET /api/v1/company/find-all': { action: 'company/find-all' },
    'PATCH /api/v1/company/update-by-id/:id': { action: 'company/update-by-id' },
    'DELETE /api/v1/company/delete-by-id/:id': { action: 'company/delete-by-id' },

    //Job
    'POST /api/v1/job/create': { action: 'job/create' },
    'GET /api/v1/job/find-all': { action: 'job/find-all' },

    //Application
    'POST /api/v1/application/create': { action: 'application/create' },
    'GET /api/v1/application/find-all': { action: 'application/find-all' },

    //Candicate
    'GET /api/v1/candidate/find-all': { action: 'candidate/find-all' },

    //User
    'POST /api/v1/user/login': { action: 'user/login' },
    'POST /api/v1/user/sign-up': { action: 'user/sign-up' },
};
